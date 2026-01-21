#!/bin/bash

# Quick Start Script for GitHub Copilot Usage Extension

echo "🚀 GitHub Copilot Usage - Quick Start"
echo "====================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the extension directory"
    echo "   cd /Users/tnitish/Developer/Personal\ Projects/github-copilot-usage"
    exit 1
fi

echo "✅ Extension directory found"
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "✅ Dependencies installed"
echo ""

# Build the extension
echo "🔨 Building extension..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Check the error messages above."
    exit 1
fi

echo ""
echo "✨ Extension is ready!"
echo ""
echo "Next steps:"
echo "1. Create GitHub Token: https://github.com/settings/tokens?type=beta"
echo "   → Set 'Plan' permission to 'Read-only'"
echo ""
echo "2. Import to Raycast:"
echo "   → Open Raycast (⌘ Space)"
echo "   → Type 'Import Extension'"
echo "   → Select this directory"
echo ""
echo "3. Configure token:"
echo "   → Run 'View Copilot Usage' command"
echo "   → Paste your GitHub token"
echo ""
echo "📖 See SETUP.md for detailed instructions"
echo "📖 See BUILD-COMPLETE.md for full documentation"
echo ""
echo "✨ Happy coding!"
