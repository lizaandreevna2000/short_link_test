type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  tag?: TagVariants;
  variant?: 'subtitle';
}
