# Geer E-commerce Platform - Intern Assignment

A modern, full-stack e-commerce platform inspired by Geer.in, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Frontend
- **Responsive Design**: Mobile-first approach with elegant UI
- **Product Listing**: Grid layout with search and filtering
- **Individual Product Pages**: Detailed product views
- **Admin Dashboard**: Product management interface
- **Modern UI**: Inspired by Geer.in with premium aesthetics

### Backend API
- **GET /api/products**: Fetch products with filtering and pagination
- **POST /api/products**: Create new products
- **PUT /api/products/[id]**: Update existing products
- **DELETE /api/products/[id]**: Delete products
- **GET /api/products/[id]**: Fetch individual product details

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Next.js API Routes
- **Data Storage**: In-memory array (for demo purposes)
- **Image Optimization**: Next.js Image component
- **Icons**: Lucide React

## 📁 Project Structure

\`\`\`
geer-ecommerce/
├── app/
│   ├── admin/                 # Admin dashboard
│   │   ├── components/        # Admin-specific components
│   │   └── page.tsx          # Admin main page
│   ├── api/                  # API routes
│   │   └── products/         # Product API endpoints
│   ├── components/           # Shared components
│   ├── products/             # Product pages
│   │   ├── [id]/            # Individual product page
│   │   └── components/       # Product-specific components
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/ui/            # shadcn/ui components
├── lib/                     # Utility functions
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/geer-intern-assignment.git
   cd geer-intern-assignment
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### Home Page (`/`)
- Hero section with call-to-action
- Shop by Shape section
- Shop by Category section
- Responsive navigation

### Products Page (`/products`)
- Product grid with responsive layout
- Search and filter functionality
- Pagination with "Load More"
- Category and shape filtering

### Individual Product Page (`/products/[id]`)
- Detailed product information
- Image gallery
- Add to cart functionality
- Product specifications

### Admin Dashboard (`/admin`)
- Product management interface
- Add, edit, and delete products
- Product table with sorting
- Form validation

## 🔧 API Endpoints

### GET /api/products
Fetch products with optional filtering and pagination.

**Query Parameters:**
- `category`: Filter by product category
- `shape`: Filter by product shape
- `search`: Search in product name and description
- `page`: Page number for pagination
- `limit`: Number of products per page

**Example:**
\`\`\`bash
GET /api/products?category=rings&page=1&limit=12
\`\`\`

### POST /api/products
Create a new product.

**Request Body:**
\`\`\`json
{
  "name": "Diamond Ring",
  "price": 50000,
  "imageUrl": "https://example.com/image.jpg",
  "category": "rings",
  "shape": "round",
  "description": "Beautiful diamond ring"
}
\`\`\`

### PUT /api/products/[id]
Update an existing product.

### DELETE /api/products/[id]
Delete a product by ID.

### GET /api/products/[id]
Fetch individual product details.

## 🎨 Design Features

- **Typography**: Playfair Display for headings, Inter for body text
- **Color Scheme**: Black, white, and gold accents
- **Responsive Grid**: 1-4 columns based on screen size
- **Loading States**: Skeleton screens and spinners
- **Error Handling**: User-friendly error messages
- **Accessibility**: ARIA labels and semantic HTML

## 🔄 State Management

- **Server Components**: For initial data fetching
- **Client Components**: For interactive features
- **Local State**: React useState for form data
- **URL State**: Search params for filters

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js App Router
- **Server-Side Rendering**: For better SEO and initial load
- **Responsive Images**: Multiple sizes for different devices

## 🧪 Testing the API

You can test the API endpoints using curl or any API testing tool:

\`\`\`bash
# Get all products
curl http://localhost:3000/api/products

# Get products with filters
curl "http://localhost:3000/api/products?category=rings&search=diamond"

# Create a new product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Ring","price":25000,"imageUrl":"https://example.com/ring.jpg"}'

# Delete a product
curl -X DELETE http://localhost:3000/api/products/1
\`\`\`

## 🚀 Deployment

The application is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 🔮 Future Enhancements

- **Database Integration**: Replace in-memory storage with PostgreSQL/MongoDB
- **Authentication**: User login and registration
- **Shopping Cart**: Add to cart and checkout functionality
- **Payment Integration**: Stripe or Razorpay integration
- **Image Upload**: File upload for product images
- **Inventory Management**: Stock tracking and alerts
- **Order Management**: Order processing and tracking
- **Reviews System**: Customer reviews and ratings

## 📝 Notes & Assumptions

- **Data Storage**: Currently using in-memory array for demo purposes
- **Authentication**: No authentication implemented (admin routes are public)
- **Image Handling**: Using placeholder images and external URLs
- **Error Handling**: Basic error handling implemented
- **Validation**: Client and server-side validation for forms
- **Responsive Design**: Tested on mobile, tablet, and desktop

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for educational purposes as part of an internship assignment.

---

**Developed by**: [Your Name]  
**Assignment**: Geer E-commerce Platform Clone  
**Tech Stack**: Next.js, TypeScript, Tailwind CSS  
**Date**: [Current Date]
