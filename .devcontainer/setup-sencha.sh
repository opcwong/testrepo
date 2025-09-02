#!/bin/bash
set -e

SENCHA_VERSION="7.9.0.35"
INSTALL_DIR="/home/codespace/bin/Sencha/Cmd/$SENCHA_VERSION"
ZIP_NAME="SenchaCmd-${SENCHA_VERSION}-linux-amd64.sh.zip"
INSTALLER_NAME="SenchaCmd-${SENCHA_VERSION}-linux-amd64.sh"

# Create bin dir if not exists
mkdir -p /home/codespace/bin

# Download Sencha Cmd Linux installer
cd /home/codespace/bin
if [ ! -f "$ZIP_NAME" ]; then
    echo "Downloading Sencha Cmd $SENCHA_VERSION..."
    wget https://cdn.sencha.com/cmd/${SENCHA_VERSION}/no-jre/${ZIP_NAME}
fi

# Unzip and run installer
unzip -o ${ZIP_NAME}
chmod +x ${INSTALLER_NAME}
./${INSTALLER_NAME} -q -dir ${INSTALL_DIR}

# Add Sencha Cmd to PATH
echo "export PATH=${INSTALL_DIR}:\$PATH" >> /home/codespace/.bashrc
export PATH=${INSTALL_DIR}:$PATH

# Clean up
rm -f ${ZIP_NAME} ${INSTALLER_NAME}

# Verify
echo "Sencha Cmd installed at: $(which sencha)"
sencha which
