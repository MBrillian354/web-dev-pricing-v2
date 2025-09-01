# Web Development Pricing Calculator

A comprehensive, interactive pricing calculator designed specifically for the Indonesian web development market. This tool helps agencies, freelancers, and clients estimate project costs based on a modular pricing framework derived from extensive market research.

## 🚀 Features

### Interactive Configuration

-   **Base Application Types**: Landing pages, business websites, dashboards, e-commerce stores, enterprise portals, educational systems (SIS/LMS)
-   **Technology Stack Selection**: WordPress, Laravel, MERN, Next.js, and mobile development with dynamic pricing multipliers
-   **Modular Add-ons**: 40+ functional modules across categories like authentication, payments, AI integrations, and more
-   **Additional Services**: Hosting, maintenance, SEO, training, and support packages

### Smart Pricing Engine

-   Real-time cost calculations based on selected components
-   Technology stack multipliers (0.7x to 2.0x)
-   Comprehensive pricing tiers (Starter, Professional, Enterprise)
-   Indonesian Rupiah (IDR) currency formatting

### Market-Based Pricing

-   Pricing derived from research of 30+ Indonesian web development providers
-   Covers premium agencies (150M+ IDR), mid-tier providers (50-150M IDR), and budget services (15-50M IDR)
-   Competitive positioning across market segments

## 🛠️ Technology Stack

-   **Frontend**: React 19.1.1 with modern hooks
-   **Styling**: Tailwind CSS 4.1.12 for responsive design
-   **Build Tool**: Vite 7.1.2 for fast development and building
-   **Code Quality**: ESLint with React-specific rules

## 📊 Pricing Categories

### Base Application Types

| Type                    | Starter         | Professional    | Enterprise     |
| ----------------------- | --------------- | --------------- | -------------- |
| **Landing Page**        | 400K - 750K IDR | 750K - 1.5M IDR | 1.5M+ IDR      |
| **Business Website**    | 1.5M - 3M IDR   | 3M - 6M IDR     | 6M+ IDR        |
| **Dashboard App**       | 500K - 750K IDR | 750K - 1.5M IDR | 1.5M+ IDR      |
| **E-commerce**          | 1M - 2M IDR     | 2M - 4M IDR     | 4M+ IDR        |
| **Enterprise Portal**   | 2M - 3.5M IDR   | 3.5M - 6M IDR   | 6M+ IDR        |
| **Educational Systems** | 1.75M - 3M IDR  | 3M - 7.5M IDR   | 6M - 7.5M+ IDR |

### Technology Multipliers

-   WordPress (Theme): 0.7x
-   WordPress (Custom): 1.0x
-   Laravel + Blade: 1.1x
-   Laravel + Vue: 1.3x
-   MERN Stack: 1.5x
-   Next.js: 1.6x
-   Mobile (Flutter/RN): 2.0x

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── BaseTypeSelector.jsx
│   ├── TechStackSelector.jsx
│   ├── ModuleSelector.jsx
│   ├── AddOnSelector.jsx
│   └── PricingSummary.jsx
├── constants/
│   └── pricingData.js    # Comprehensive pricing data
├── hooks/
│   └── usePricingCalculator.js  # Cost calculation logic
├── utils/
│   └── formatCurrency.js # IDR currency formatting
└── App.jsx              # Main application component
```

## 🚦 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MBrillian354/web-dev-pricing-v2.git
cd web-dev-pricing-v2
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint

## 💼 Use Cases

### For Agencies & Freelancers

-   Generate quick, professional quotes for clients
-   Standardize pricing across projects
-   Demonstrate value through transparent breakdown
-   Cover 80%+ of common client requests

### For Clients

-   Understand web development costs upfront
-   Compare different technology options
-   Plan project budgets effectively
-   See detailed cost breakdowns

### Market Segments

-   **Startups**: Basic to professional tiers
-   **SMEs**: Professional to enterprise solutions
-   **Large Corporations**: Enterprise-level systems
-   **Educational Institutions**: Specialized academic systems

## 📈 Market Research Foundation

This calculator is built on comprehensive research including:

-   Analysis of 30+ Indonesian web development providers
-   Pricing comparison across premium agencies, mid-tier providers, and budget services
-   Technology stack preferences and market rates
-   Add-on services pricing in the Indonesian market

See `MARKET_RESEARCH.md` and `MARKET_RESEARCH_UPDATED.md` for detailed findings.

## 🎯 Key Benefits

-   **Transparency**: Clear pricing structure clients can understand
-   **Flexibility**: Adaptable to various client needs and budgets
-   **Competitiveness**: Positioned appropriately across market segments
-   **Profitability**: Maintains healthy margins while delivering value
-   **Efficiency**: Streamlines the quoting process

## 🔧 Customization

The pricing data can be easily customized in `src/constants/pricingData.js`:

-   Adjust base prices for different markets
-   Modify technology multipliers
-   Add new modules or services
-   Update add-on pricing

## 📱 Responsive Design

Built with mobile-first approach using Tailwind CSS:

-   Fully responsive across all device sizes
-   Optimized for both desktop and mobile usage
-   Professional, modern interface

## 🌏 Localization

-   Indonesian Rupiah (IDR) currency formatting
-   Pricing based on Indonesian market rates
-   Can be adapted for other markets by adjusting the pricing data

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support, please open an issue on GitHub.
