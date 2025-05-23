pipeline {
    agent any

    environment {
        REPO = 'am1t0/Coding_Platform_frontend'
        GIT_EMAIL = '22bit115@ietdavv.edu.in'
        GIT_NAME = 'Amit Pandey'
        GITHUB_CRED = credentials('git-token')
    }

    stages {
        stage('Prepare GitHub Pages Content') {
            steps {
                sh '''
                    rm -rf gh-pages-deploy
                    mkdir gh-pages-deploy
                    rsync -av --exclude='.git' --exclude='gh-pages-deploy' --exclude='Jenkinsfile' ./ gh-pages-deploy/
                '''
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                dir('gh-pages-deploy') {
                    sh """
                        rm -rf .git
                        git init
                        git config user.name "${GIT_NAME}"
                        git config user.email "${GIT_EMAIL}"
                        git remote add origin https://${GITHUB_CRED_USR}:${GITHUB_CRED_PSW}@github.com/${REPO}.git
                        git checkout -b gh-pages
                        git add .
                        git commit -m "Deploy static site to GitHub Pages"
                        git push --force origin gh-pages
                    """
                }
            }
        }
    }

    post {
        success {
            echo '✅ Site deployed to GitHub Pages successfully.'
        }
        failure {
            echo '❌ Deployment to GitHub Pages failed.'
        }
    }
}