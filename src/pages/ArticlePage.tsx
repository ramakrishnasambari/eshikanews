import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Button,
  Divider,
  Avatar,
  IconButton,
  Breadcrumbs,
} from '@mui/material';
import {
  ArrowBack,
  Share,
  BookmarkBorder,
  Facebook,
  Twitter,
  LinkedIn,
  AccessTime,
  Person,
} from '@mui/icons-material';
import { getArticleById, getArticlesByCategory, categories } from '../data/newsData';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(id || '');

  if (!article) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Article not found
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
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const category = categories.find(cat => cat.name === article.category);
  const relatedArticles = getArticlesByCategory(article.category)
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Button component={Link} to="/" color="inherit" sx={{ textTransform: 'none' }}>
          Home
        </Button>
        <Button 
          component={Link} 
          to={`/category/${article.category}`} 
          color="inherit" 
          sx={{ textTransform: 'none' }}
        >
          {category?.label}
        </Button>
        <Typography color="text.primary">{article.title}</Typography>
      </Breadcrumbs>

      {/* Article Header */}
      <Box sx={{ mb: 4 }}>
        <Chip
          label={category?.label}
          color="primary"
          sx={{ mb: 2 }}
        />
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          {article.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          {article.summary}
        </Typography>
        
        {/* Article Meta */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Person sx={{ fontSize: 'small', color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {article.author}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTime sx={{ fontSize: 'small', color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {formatDate(article.publishedAt)} at {formatTime(article.publishedAt)}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {article.readTime} min read
          </Typography>
        </Box>

        {/* Social Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <IconButton size="small">
            <Share />
          </IconButton>
          <IconButton size="small">
            <BookmarkBorder />
          </IconButton>
          <IconButton size="small" sx={{ color: '#1877f2' }}>
            <Facebook />
          </IconButton>
          <IconButton size="small" sx={{ color: '#1da1f2' }}>
            <Twitter />
          </IconButton>
          <IconButton size="small" sx={{ color: '#0077b5' }}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>

      {/* Article Image */}
      <Box sx={{ mb: 4 }}>
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
      </Box>

      {/* Article Content */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
          {article.content.split('\n\n').map((paragraph, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              {paragraph}
            </Typography>
          ))}
        </Typography>
      </Box>

      {/* Tags */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Tags
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {article.tags.map((tag) => (
            <Chip key={tag} label={tag} variant="outlined" size="small" />
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Related Articles */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Related Articles
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          {relatedArticles.map((relatedArticle) => (
            <Card key={relatedArticle.id} sx={{ width: 300, flexShrink: 0 }}>
              <img
                src={relatedArticle.imageUrl}
                alt={relatedArticle.title}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  {relatedArticle.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {relatedArticle.summary}
                </Typography>
                <Button
                  component={Link}
                  to={`/article/${relatedArticle.id}`}
                  variant="outlined"
                  color="primary"
                  size="small"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Back to Home */}
      <Box sx={{ textAlign: 'center' }}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          size="large"
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default ArticlePage; 