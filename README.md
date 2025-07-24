# 🚀 Reactive Redis & Spring WebFlux – Personal Playground

## 📘 Overview

This is my personal project to explore and apply advanced concepts in **Reactive Programming**, focusing on the integration between **Redis** and **Spring WebFlux**. The goal is to enhance the **performance**, **scalability**, and **real-time capability** of Microservices using non-blocking techniques.

I created this repo as part of my self-learning journey in 2025, particularly after deep-diving into topics like caching, messaging, reactive Redis integration, and geospatial data handling.

---

## 🎯 Key Concepts Practiced

### 🔹 Caching with Redis
- Applied various **Redis data structures** (String, Hash, Set, Sorted Set, etc.)
- Implemented common **caching patterns** (Cache-Aside, Read-Through)
- Built a **generic reactive cache** utility
- Implemented cache **TTL and eviction strategies**

### 🔹 Reactive Redis Integration
- Used **Spring Data Reactive Redis** and **Redisson** with Spring Boot
- Built non-blocking cache access logic using **Project Reactor**
- Used Redis Streams and Pub/Sub in a reactive manner

### 🔹 Redis as Message Queue
- Simulated **message queuing** using Redis
- Built a **priority queue**
- Implemented **Redis Pub/Sub** for inter-service messaging

### 🔹 WebSocket + Redis Pub/Sub (Real-Time App)
- Developed a simple **chat application**
- WebSocket-based live messaging using **Spring WebFlux**
- Redis used to broadcast messages between connected clients

### 🔹 Geospatial Redis Use Case
- Built a **restaurant locator** using Redis’ geospatial data type
- Allowed location search based on zip code & radius

---

## 📊 Performance Testing
Using **JMeter**, I benchmarked some reactive endpoints and observed up to **80% improvement** in throughput compared to traditional synchronous implementations.

---

## 🧰 Tech Stack

- Java 21
- Spring Boot + Spring WebFlux
- Redis (Standalone & Cluster)
- Redisson / Spring Data Reactive Redis
- WebSocket
- JMeter (for load testing)
- Maven

---

## 📦 Getting Started

```bash
git clone https://github.com/your-username/reactive-redis-webflux-playground.git
cd reactive-redis-webflux-playground
mvn clean install
