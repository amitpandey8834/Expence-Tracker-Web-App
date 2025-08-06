# Expense Tracker Web App

**A full-stack Expense Tracker built with Node.js, Express, MongoDB, React, and DevOps automation 🚀**

Track your expenses securely with cloud-native deployment and monitoring tools — complete with CI/CD pipelines, Docker, Kubernetes, Terraform, and Prometheus/Grafana observability.

---

## 🧠 About the Project

This application is built as a real-world demo of end-to-end DevOps workflows:

- Frontend: React + Tailwind CSS for the UI  
- Backend: Node.js + Express + MongoDB for REST APIs  
- Automated CI/CD: Jenkins / GitHub Actions pipelines  
- Infrastructure as Code: Terraform + AWS EC2  
- Orchestration: Docker containers deployed on Kubernetes (EKS)  
- Configuration Management: Ansible playbooks for server setup  
- Logging & Monitoring: Prometheus, Grafana, and Loki dashboards

It showcases full-cycle infrastructure provisioning, container deployments, logging, monitoring, and secret/driven configurations — ideal for DevOps job portfolios.

---

## ⚙️ Features

- User authentication and profile setup  
- CRUD operations for tracking expenses and income  
- Dynamic dashboards showing current balance, total spending, and category-wise breakdown  
- Real-time log streaming and health metrics using Prometheus & Grafana  
- Secure secrets and config management using Kubernetes ConfigMaps & Secrets  
- Auto-scaling pods with Horizontal Pod Autoscaler in Kubernetes cluster

---

## 📦 Architecture Diagram

User ↔ React Frontend ✓
REST API ↔ Express Backend ✓
MongoDB ✓
CI/CD (Jenkins / GitHub Actions) ✓
Terraform → AWS EC2 ✓
Docker → Kubernetes (EKS) ✓
Ansible for server configuration ✓
Prometheus / Grafana / Loki for observability ✓

yaml
Copy
Edit

---

## 🚀 Getting Started (Local + Cloud)

### Local Setup:
1. Clone the repo:
   ```bash
   git clone https://github.com/amitpandey8834/Expence-Tracker-Web-App.git
   cd Expence-Tracker-Web-App
Install dependencies:

bash
Copy
Edit
cd backend && npm install
cd ../frontend && npm install
Run services:

bash
Copy
Edit
cd backend && npm start
cd ../frontend && npm start
Access the app at http://localhost:3000.

Cloud Deployment (AWS + Terraform):
Install and configure Terraform and AWS CLI.

Navigate to terraform/ folder:

bash
Copy
Edit
terraform init
terraform apply
Use outputted EC2 IP to configure backend.

Build Docker images and push to ECR.

Deploy to EKS and apply Kubernetes manifests:

bash
Copy
Edit
kubectl apply -f k8s/
Monitor logs via Prometheus/Grafana services.

🧪 Testing & CI/CD
CI/CD automated via Jenkins or GitHub Actions pipeline — triggers on commits and deploys to staging/production clusters.

Unit and integration tests run automatically before deployment.

Ansible playbooks ensure consistent configuration across environments.

📂 Folder Structure
pgsql
Copy
Edit
📁 frontend/            React UI code  
📁 backend/             Node.js server logic  
📁 terraform/           AWS infra as code  
📁 k8s/                 Kubernetes manifests  
📁 ansible/             Server configuration playbooks  
📁 monitoring/          Prometheus & Grafana configs  
🔧 Tech Stack
Languages: JavaScript (Node.js, React), Bash

CI/CD: Jenkins or GitHub Actions

Containerization: Docker, Kubernetes (EKS)

Infrastructure as Code: Terraform

Config Management: Ansible

Monitoring: Prometheus, Grafana, Loki

Version Control: Git, GitHub

✅ Who Is This For
Aspiring DevOps/cloud engineers seeking real-world exposure to CI/CD pipelines, automated deployments, monitoring, and IaC workflows.

Students and professionals building DevOps portfolios that showcase full-stack deployment, cloud infra setup, and monitoring stack integration.

📚 Additional Resources
Refer to the docs/ folder for detailed architecture diagrams, pipeline definitions, and Terraform templates.

Related blog post: Building a DevOps Expense Tracker from scratch (Add link if available)

📥 Contributing
Contributions and feedback are welcome! To contribute:

Fork the repository

Create a new branch (git checkout -b feature/my-feature)

Commit your changes (git commit -m 'Add feature')

Push to your branch (git push origin feature/my-feature)

Open a pull request

📝 License
This project is open source and distributed under the MIT License.

🎯 Author
Amit Kumar Pandey
B.Tech Computer Science student & DevOps enthusiast
GitHub: amitpandey8834
LinkedIn: in/amit‑pandey‑71694a314
