import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Divider,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {
  newsArticles,
  categories,
  getArticlesByCategory,
} from '../data/newsData';

const HomePage: React.FC = () => {
  const latestArticles = newsArticles.slice(0, 6);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };



  const ArticleCard: React.FC<{ article: any }> = ({ article }) => (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="160"
        image={article.imageUrl}
        alt={article.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 1 }}>
          <Chip
            label={article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            size="small"
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              mb: 1,
            }}
          />
        </Box>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {article.summary}
        </Typography>
        <Box sx={{ mt: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
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
            variant="outlined"
            color="primary"
            size="small"
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
      {/* Latest News */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          Latest News
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {latestArticles.map((article) => (
            <Box sx={{ flex: '1 1 350px', minWidth: 0 }} key={article.id}>
              <ArticleCard article={article} />
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Category Sections */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          Browse by Category
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {categories.map((category) => {
            const categoryArticles = getArticlesByCategory(category.name).slice(0, 3);
            return (
              <Box sx={{ flex: '1 1 400px', minWidth: 0 }} key={category.name}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {category.label}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {categoryArticles.map((article) => (
                    <Box key={article.id}>
                      <Card sx={{ display: 'flex', height: 120 }}>
                        <CardMedia
                          component="img"
                          sx={{ width: 120, objectFit: 'cover' }}
                          image={article.imageUrl}
                          alt={article.title}
                        />
                        <CardContent sx={{ flex: 1, p: 2 }}>
                          <Typography variant="subtitle2" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
                            {article.title}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                            {formatDate(article.publishedAt)}
                          </Typography>
                          <Button
                            component={Link}
                            to={`/article/${article.id}`}
                            size="small"
                            color="primary"
                            sx={{ p: 0, minWidth: 'auto' }}
                          >
                            Read More →
                          </Button>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button
                    component={Link}
                    to={`/category/${category.name}`}
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    View All {category.label} News
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage; 