<h1 style="text-align: center">Notes App Backend</h1>

## Prerequisites
- NodeJS v12+

## Production Deployment Guide
```bash
# Clone the application
git clone https://github.com/aydinpramasta/notes-app-backend.git

# Install dependencies
npm install --omit=dev

# Create environment variables
export SERVER_HOSTNAME=<your_hostname> # localhost
export SERVER_PORT=<your_port> # 8000

# Run the application
npm run start
```
> Now access [http://notesapp-v1.dicodingacademy.com](http://notesapp-v1.dicodingacademy.com), then in the top panel, click the "Change URL" button. Enter your server hostname and port. Don't forget to test all functionality of the application.
