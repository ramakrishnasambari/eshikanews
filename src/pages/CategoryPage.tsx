import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Breadcrumbs,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Search,
  Sort,
  ArrowForward,
} from '@mui/icons-material';
import { getArticlesByCategory, categories } from '../data/newsData';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryInfo = categories.find(cat => cat.name === category);
  const articles = getArticlesByCategory(category || '');

  if (!categoryInfo || !articles.length) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Category not found
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          Back to Home
        </Button>
      </Container>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Sort articles
  const sortedArticles = [...articles].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'oldest':
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      case 'readTime':
        return a.readTime - b.readTime;
      default:
        return 0;
    }
  });

  // Filter articles by search query
  const filteredArticles = sortedArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ArticleCard: React.FC<{ article: any }> = ({ article }) => (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={article.imageUrl}
        alt={article.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={categoryInfo.label}
            size="small"
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              mb: 1,
            }}
          />
          <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
            {article.summary}
          </Typography>
        </Box>
        <Box sx={{ mt: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="caption" color="text.secondary">
              By {article.author}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {article.readTime} min read
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
            {formatDate(article.publishedAt)}
          </Typography>
          <Button
            component={Link}
            to={`/article/${article.id}`}
            variant="contained"
            color="primary"
            endIcon={<ArrowForward />}
            fullWidth
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Button component={Link} to="/" color="inherit" sx={{ textTransform: 'none' }}>
          Home
        </Button>
        <Typography color="text.primary">{categoryInfo.label}</Typography>
      </Breadcrumbs>

      {/* Category Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          {categoryInfo.label} News
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Stay updated with the latest {categoryInfo.label.toLowerCase()} news and insights
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {filteredArticles.length} articles found
        </Typography>
      </Box>

      {/* Filters and Search */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ minWidth: 300 }}
        />
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sortBy}
            label="Sort by"
            onChange={(e) => setSortBy(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Sort />
              </InputAdornment>
            }
          >
            <MenuItem value="newest">Newest First</MenuItem>
            <MenuItem value="oldest">Oldest First</MenuItem>
            <MenuItem value="readTime">Read Time</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {filteredArticles.map((article) => (
            <Box sx={{ flex: '1 1 350px', minWidth: 0 }} key={article.id}>
              <ArticleCard article={article} />
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No articles found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Try adjusting your search criteria or browse other categories
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Browse All Categories
          </Button>
        </Box>
      )}

      {/* Back to Home */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          component={Link}
          to="/"
          variant="outlined"
          color="primary"
          size="large"
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default CategoryPage; 