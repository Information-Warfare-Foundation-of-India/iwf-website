# Information Warfare Foundation of India (IWF) Website

This repository contains the official website for the Information Warfare Foundation of India (IWF), a non-profit organization dedicated to combating misinformation, cybercrime, unethical AI, and e-waste through research, education, and advocacy.

## About IWF

The Information Warfare Foundation (IWF) was launched on November 12, 2024, by a team of 22 co-founders from Odisha led by Niroj Mohapatra (Chairman), Ranjan Kumar Samal (President), and Dr. Bibhuti Bhusan Nayak (Secretary).

Our mission is to empower India to lead in the digital age by:
- Combating misinformation and fake news
- Promoting cybersecurity awareness and best practices
- Advocating for ethical AI development and usage
- Supporting sustainable e-waste management
- Providing digital literacy education

## Website Features

- **Modern Design**: Built with Next.js and Tailwind CSS for a responsive, user-friendly experience
- **Comprehensive Information**: Detailed sections about our mission, services, and impact
- **Volunteer Portal**: Easy registration and management for volunteers
- **Secure Donations**: Integrated payment gateway for secure donations
- **Blog & Resources**: Latest insights, research, and news on information warfare and cybersecurity
- **Contact System**: Simple way to get in touch with our team

## Technology Stack

- **Frontend**: Next.js (React.js), Tailwind CSS, Framer Motion
- **State Management**: React Context API
- **UI Components**: Custom components with ShadCN UI principles
- **Animations**: Framer Motion for smooth transitions
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iwf-india/iwf-website.git
   cd iwf-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add the following variables:
     ```
     NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```
   - You can obtain a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
iwf-website/
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable UI components
│   │   ├── ui/        # Base UI components
│   │   ├── layout/    # Layout components
│   │   ├── home/      # Homepage-specific components
│   │   └── ...        # Other section components
│   ├── lib/           # Utility functions and helpers
│   └── store/         # State management
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Contributing

We welcome contributions to improve the website. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or inquiries, please contact us at info@iwf.org.in or visit our [website](https://iwf.org.in).

---

© 2024 Information Warfare Foundation of India. All rights reserved.
