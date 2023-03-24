<h1 style="text-align: center">Notes App Backend</h1>

## Prerequisites
- Git
- NodeJS v12+

## Production Deployment Guide
```bash
# Clone the application
git clone https://github.com/aydinpramasta/notes-app-backend.git

# Change directory
cd notes-app-backend

# Install dependencies
npm install --omit=dev

# Create environment variables
export SERVER_HOSTNAME=<your_hostname> # 0.0.0.0
export SERVER_PORT=<your_port> # 8000

# Run the application
npm run prod
```
> Now access [http://notesapp-v1.dicodingacademy.com](http://notesapp-v1.dicodingacademy.com), then in the top panel, click the "Change URL" button. Enter your server hostname and port. Don't forget to test all functionality of the application.
