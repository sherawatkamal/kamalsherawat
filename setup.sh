#!/bin/bash

echo "🎓 Setting up Kamal Sherawat's Academic Portfolio Website"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🚀 Setup complete! To start the development server:"
echo "   npm start"
echo ""
echo "📚 To build for production:"
echo "   npm run build"
echo ""
echo "🧪 To run tests:"
echo "   npm test"
echo ""
echo "📖 Read README-React.md for detailed instructions"
echo ""
echo "Happy coding! 🎉"
