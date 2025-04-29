import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme-canvas">
      <div className="aboutme-content">
        <h1 className="aboutme-title">👋 Introduction – Ichiro Yamasaki</h1>
        <h2 className="aboutme-subtitle">Solutions Engineer | Infrastructure Automation | Backend Engineering</h2>
        
        <p className="aboutme-paragraph">
          I'm an experienced Solutions Engineer with a strong focus on infrastructure automation, backend development, and observability. 
          I currently work at StoreEase, a startup building active kiosk systems, where I lead initiatives to streamline infrastructure provisioning, 
          monitor device health at scale, and support customer-facing teams with hands-on technical solutions.
        </p>
        
        <div className="aboutme-section">
          <h2 className="section-title">⚙️ What I Do</h2>
          <ul className="aboutme-list">
            <li>
              <strong>Infrastructure Automation</strong>
              <p>
                Automate deployment and configuration of devices (Meraki, PDUs, Raspberry Pi, BrightSign, MDM) 
                using tools like Retool, FastAPI, Django, and GCP.
              </p>
            </li>
            <li>
              <strong>Monitoring & Observability</strong>
              <p>
                Built Grafana dashboards, Prometheus exporters, and alert systems to track internet health, 
                facility activity, and detect anomalies.
              </p>
            </li>
            <li>
              <strong>Backend Engineering</strong>
              <p>
                Contribute to a Django project and a k3s-based system that manages a fleet of devices 
                and containerized services with varying configurations.
              </p>
            </li>
            <li>
              <strong>Cross-Team Support</strong>
              <p>
                Partner closely with Support, Customer Success, and Product teams to troubleshoot edge cases, 
                resolve incidents, and improve service reliability.
              </p>
            </li>
          </ul>
        </div>
        
        <div className="aboutme-section">
          <h2 className="section-title">🧠 Career History</h2>
          <ul className="aboutme-list">
            <li>
              <strong>2 years – MSP (Managed Service Provider)</strong>
              <p>
                Worked across the full IT stack: firewall management, data center remote hands, 
                office relocations, endpoint support, and network troubleshooting.
              </p>
            </li>
            <li>
              <strong>2 year – AWS Cloud Solutions Engineer</strong>
              <p>
                Provided technical support for enterprise customers running production workloads on AWS. 
                Diagnosed complex infrastructure and service issues.
              </p>
            </li>
            <li>
              <strong>0.5 year – Wiz (Cloud Security Startup) Solutions Support Engineer</strong>
              <p>
                Delivered customer-facing technical solutions. Reproduced infrastructure issues 
                using Terraform to assist in root cause analysis and resolution.
              </p>
            </li>
            <li>
              <strong>1 year – StoreEase (Startup) Solutions Engineer</strong>
              <p>
                Leading infrastructure and provisioning initiatives. Built automation for kiosk systems, 
                real-time monitoring, and internal tooling.
              </p>
            </li>
          </ul>
        </div>
        
        <div className="aboutme-section">
          <h2 className="section-title">🎯 What I'm Working Toward</h2>
          <ul className="aboutme-list">
            <li>
              Becoming a high-impact technical leader, blending engineering excellence and customer obsession with business outcomes.
            </li>
            <li>
              Delivering MVPs as services (e.g., provisioning tools, AI-powered dashboards) to help businesses streamline IT operations.
            </li>
            <li>
              Deepening skills in Kubernetes, observability, automation, and AI integration.
            </li>
          </ul>
        </div>
      </div>
      
      <Link to="/" className="back-to-home-link">
        <div className="back-to-home">back to home</div>
      </Link>
    </div>
  );
}

export default AboutMe;
