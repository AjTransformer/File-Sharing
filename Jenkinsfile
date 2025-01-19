pipeline {
    agent any
    environment {
        NODE_VERSION = '20.10.0' // Specify your Node.js version
    }
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/AjTransformer/File-sharing.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    nodejs(NODE_VERSION) {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    nodejs(NODE_VERSION) {
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    nodejs(NODE_VERSION) {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Deploy Backend') {
            steps {
                echo 'Deploying backend...'
                // Add deployment steps for the backend
            }
        }
        stage('Deploy Frontend') {
            steps {
                echo 'Deploying frontend...'
                // Add deployment steps for the frontend
            }
        }
    }
}
