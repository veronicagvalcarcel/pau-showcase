// src/components/data.ts

export interface Product {
  id: string;
  title: string;
  alt: string;
  category: 'camiseta' | 'lamina' | 'totebag';
  image: string;
}

export const products: Product[] = [
  // Camisetas (15)
  { id: 'c1', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c1.png' },
  { id: 'c2', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c2.jpg' },
  { id: 'c3', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c3.jpg' },
  { id: 'c4', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c4.jpg' },
  { id: 'c5', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c5.jpg' },
  { id: 'c6', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c6.jpg' },
  { id: 'c7', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c7.jpg' },
  { id: 'c8', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c8.jpg' },
  { id: 'c9', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c9.jpg' },
  { id: 'c10', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c10.jpg' },
  { id: 'c11', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c11.jpg' },
  { id: 'c12', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c12.jpg' },
  { id: 'c13', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c13.jpg' },
  { id: 'c14', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c14.jpg' },
  { id: 'c15', title: '', alt: '', category: 'camiseta', image: '/Camisetas/c15.jpg' },

  // Láminas (12)
  { id: 'l1', title: '', alt: '', category: 'lamina', image: '/Laminas/l1.png' },
  { id: 'l2', title: '', alt: '', category: 'lamina', image: '/Laminas/l2.jpg' },
  { id: 'l3', title: '', alt: '', category: 'lamina', image: '/Laminas/l3.jpg' },
  { id: 'l4', title: '', alt: '', category: 'lamina', image: '/Laminas/l4.jpg' },
  { id: 'l5', title: '', alt: '', category: 'lamina', image: '/Laminas/l5.jpg' },
  { id: 'l6', title: '', alt: '', category: 'lamina', image: '/Laminas/l6.jpg' },
  { id: 'l7', title: '', alt: '', category: 'lamina', image: '/Laminas/l7.jpg' },
  { id: 'l8', title: '', alt: '', category: 'lamina', image: '/Laminas/l8.jpg' },
  { id: 'l9', title: '', alt: '', category: 'lamina', image: '/Laminas/l9.jpg' },
  { id: 'l10', title: '', alt: '', category: 'lamina', image: '/Laminas/l10.jpg' },
  { id: 'l11', title: '', alt: '', category: 'lamina', image: '/Laminas/l11.jpg' },
  { id: 'l12', title: '', alt: '', category: 'lamina', image: '/Laminas/l12.jpg' },

  // Totebags (11)
  { id: 't1', title: '', alt: '', category: 'totebag', image: '/Totebags/t1.png' },
  { id: 't2', title: '', alt: '', category: 'totebag', image: '/Totebags/t2.jpg' },
  { id: 't3', title: '', alt: '', category: 'totebag', image: '/Totebags/t3.jpg' },
  { id: 't4', title: '', alt: '', category: 'totebag', image: '/Totebags/t4.jpg' },
  { id: 't5', title: '', alt: '', category: 'totebag', image: '/Totebags/t5.jpg' },
  { id: 't6', title: '', alt: '', category: 'totebag', image: '/Totebags/t6.jpg' },
  { id: 't7', title: '', alt: '', category: 'totebag', image: '/Totebags/t7.jpg' },
  { id: 't8', title: '', alt: '', category: 'totebag', image: '/Totebags/t8.jpg' },
  { id: 't9', title: '', alt: '', category: 'totebag', image: '/Totebags/t9.jpg' },
  { id: 't10', title: '', alt: '', category: 'totebag', image: '/Totebags/t10.jpg' },
  { id: 't11', title: '', alt: '', category: 'totebag', image: '/Totebags/t11.jpg' },
];