# Utiliser l'image Node.js qui correspond à ses besoins et qui permet l'installation de OpenSSL
FROM node:22

# Installer OpenSSL
RUN apt update -y && apt install -y openssl

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Changer l'utilisateur en non-root
RUN chown -R 1000:100 /app
USER 1000:100

# Exposer le port que Next.js utilisera
EXPOSE 3000

# Démarrer un shell interactif par défaut lorsque le conteneur est lancé
CMD ["/bin/bash"]
