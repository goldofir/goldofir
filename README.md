# Goldofir Website

Welcome to the Goldofir website repository! This is a modern web application built with React and Vite.

## Features

- Modern and responsive design
- Built with React 18
- Fast development with Vite
- Styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/goldofir/goldofir.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript/TypeScript

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Steps to Create and Use the Image Locally

### Clone the Repository (if not done yet)

Make sure you have cloned the repository on the machine where Docker is running:
```bash
git clone https://github.com/goldofir/goldofir.git
```

### Navigate to the Repository Directory

Go to the directory where you cloned the repository:
```bash
cd /var/lib/docker/volumes/<volume_name>/_data
```

### Build Docker Image Locally

Ensure the repository contains a Dockerfile. In the repository directory, build the local image:
```bash
docker build -t goldofir:latest .
```

### Update Stack to Use Local Image

Update your stack to use the local image you just built. In your docker-compose.yml or Portainer stack, replace:
```yaml
image: ghcr.io/goldofir/goldofir:latest
```
with:
```yaml
image: goldofir:latest
```

### Deploy Stack in Portainer

Now that the image is built locally, you can deploy the stack in Portainer. Follow these steps:
1. Access Portainer
2. Go to "Stacks"
3. Edit existing stack or add a new one using the updated configuration
4. Click on "Deploy the stack"

In your project directory, adjust permissions with the following command:
```bash
chmod -R 755 .
``` 