pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/AjTransformer/File-sharing.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Build Frontend') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy Backend') {
            steps {
                echo 'Deploying backend...'
                // Add deployment commands for backend
            }
        }
        stage('Deploy Frontend') {
            steps {
                echo 'Deploying frontend...'
                // Add deployment commands for frontend
            }
        }
    }
}
