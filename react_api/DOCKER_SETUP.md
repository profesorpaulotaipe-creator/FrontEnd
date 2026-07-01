# 🐳 Guía de Instalación y Uso de Docker - React API

Guía completa para ejecutar el proyecto **react_api** con Docker en **Windows, Mac y Linux**.

---

## 📋 Requisitos Previos

### Windows 10/11
- **Docker Desktop para Windows**: https://www.docker.com/products/docker-desktop
- WSL 2 (Windows Subsystem for Linux 2) activado
- Mínimo 4GB RAM asignado a Docker

### Mac
- **Docker Desktop para Mac**: https://www.docker.com/products/docker-desktop
- Mínimo 4GB RAM asignado a Docker

### Linux (Ubuntu/Arch)
```bash
sudo apt install docker.io docker-compose  # Ubuntu
sudo pacman -S docker docker-compose       # Arch
sudo systemctl start docker
sudo systemctl enable docker
```

---

## 🚀 Instalación de Docker

### Paso 1: Descargar e Instalar

**Windows/Mac:**
1. Descarga Docker Desktop desde: https://www.docker.com/products/docker-desktop
2. Ejecuta el instalador
3. Reinicia tu computadora
4. Abre Docker Desktop (verifica que está corriendo)

**Verifica la instalación:**
```bash
docker --version
docker-compose --version
```

---

## 📦 Configuración del Proyecto

El proyecto ya incluye los archivos necesarios:
- `Dockerfile` - Configuración del contenedor
- `docker-compose.yml` - Orquestación de servicios
- `.dockerignore` - Archivos ignorados en el contenedor

**No necesitas cambiar nada.**

---

## ▶️ Ejecutar el Proyecto

### Opción 1: Desde Terminal (Recomendado)

1. **Abre una terminal/PowerShell en la carpeta del proyecto:**
```bash
cd ruta/a/react_api
```

2. **Inicia Docker:**
```bash
docker-compose up
```

Verás algo como:
```
react_api_dev  |   VITE v8.1.0  ready in 485 ms
react_api_dev  |   ➜  Local:   http://localhost:5173/
```

3. **Abre en tu navegador:**
```
http://localhost:5173
```

---

### Opción 2: Ejecutar en Segundo Plano

Si no quieres que la terminal quede ocupada:

```bash
docker-compose up -d
```

Para ver los logs después:
```bash
docker-compose logs -f
```

---

## 🛑 Detener el Proyecto

### Opción 1: En la terminal donde está ejecutándose
Presiona **Ctrl + C**

### Opción 2: Si está en segundo plano
```bash
docker-compose down
```

---

## 🔄 Comandos Útiles

### Ver logs en vivo
```bash
docker-compose logs -f
```

### Reconstruir la imagen (después de cambiar dependencias)
```bash
docker-compose up --build
```

### Limpiar contenedores y volúmenes
```bash
docker-compose down -v
```

### Ver contenedores activos
```bash
docker ps
```

### Ejecutar comando dentro del contenedor
```bash
docker-compose exec react-app pnpm install
```

---

## ⚠️ Problemas Comunes

### "docker: command not found"
**Solución:** Docker no está instalado. Descárgalo desde:
https://www.docker.com/products/docker-desktop

### "Permission denied" (Linux)
**Solución:**
```bash
sudo usermod -aG docker $USER
newgrp docker
docker-compose up
```

### Puerto 5173 ya está en uso
**Solución:** Edita `docker-compose.yml` y cambia:
```yaml
ports:
  - "5174:5173"  # Usa 5174 en tu navegador
```

### El contenedor se detiene inmediatamente
**Solución:** Verifica los logs:
```bash
docker-compose logs
```

### Cambios en el código no se reflejan
**Solución:** Docker está usando archivos en caché. Reconstruye:
```bash
docker-compose down
docker-compose up --build
```

---

## 📁 Estructura de Archivos

```
react_api/
├── Dockerfile              # Configuración del contenedor
├── docker-compose.yml      # Orquestación
├── .dockerignore          # Archivos ignorados
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── pnpm-lock.yaml
└── vite.config.js
```

---

## 🔧 Agregar Nuevas Dependencias

Si necesitas instalar un paquete:

```bash
docker-compose exec react-app pnpm add nombre-del-paquete
```

O detén y reconstruye:
```bash
docker-compose down
docker-compose up --build
```

---

## 💡 Tips Importantes

✅ **Docker debe estar corriendo** antes de ejecutar `docker-compose up`

✅ **La primera vez tarda más** porque descarga e instala todo

✅ **Los cambios en el código son inmediatos** (hot reload funciona)

✅ **No necesitas Node.js instalado** en tu computadora (Docker lo proporciona)

✅ **Funciona igual en Windows, Mac y Linux**

---

## 🎯 Flujo de Trabajo Típico

```bash
# 1. Clona el proyecto
git clone <repositorio>
cd react_api

# 2. Inicia Docker
docker-compose up

# 3. Abre http://localhost:5173 en el navegador

# 4. Haz cambios en el código (se actualizan automáticamente)

# 5. Cuando termines, presiona Ctrl + C
```

---

## 📞 Soporte

Si tienes problemas:

1. Verifica que Docker Desktop está corriendo
2. Ejecuta `docker-compose logs` para ver errores
3. Intenta: `docker-compose down` y luego `docker-compose up --build`
4. Contacta al profesor

---

## 🎓 Recursos Adicionales

- Documentación de Docker: https://docs.docker.com/
- Docker Compose: https://docs.docker.com/compose/
- Vite (framework usado): https://vitejs.dev/

---

**¡A programar! 🚀**