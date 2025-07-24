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
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {
  newsArticles,
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


    </Container>
  );
};

export default HomePage; 