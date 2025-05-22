pipeline {
    agent any

    environment {
        REPO = 'am1t0/Coding_Platform_frontend'
        GIT_EMAIL = '22bit115@ietdavv.edu.in'
        GIT_NAME = 'Amit Pandey'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Use withCredentials to mask the token in logs
                withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN')]) {
                    git url: "https://${GITHUB_TOKEN}@github.com/${REPO}.git"
                }
            }
        }

        stage('Prepare GitHub Pages Content') {
            steps {
                script {
                    sh 'mkdir -p gh-pages-deploy'
                    sh 'cp -r * gh-pages-deploy'
                }
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN')]) {
                    dir('gh-pages-deploy') {
                        sh '''
                            git init
                            git config user.name "$GIT_NAME"
                            git config user.email "$GIT_EMAIL"
                            git remote add origin https://${GITHUB_TOKEN}@github.com/${REPO}.git
                            git checkout -b gh-pages
                            git add .
                            git commit -m "Deploy static site to GitHub Pages"
                            git push --force origin gh-pages
                        '''
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Site deployed to GitHub Pages successfully.'
        }
        failure {
            echo 'Deployment to GitHub Pages failed.'
        }
    }
}
