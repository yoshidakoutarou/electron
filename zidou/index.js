"use strct";

// Electron�̃��W���[��
const electron = require("electron");

// �A�v���P�[�V�������R���g���[�����郂�W���[��
const app = electron.app;

// �E�B���h�E���쐬���郂�W���[��
const BrowserWindow = electron.BrowserWindow;

// ���C���E�B���h�E��GC����Ȃ��悤�ɃO���[�o���錾
let mainWindow = null;

// �S�ẴE�B���h�E��������I��
app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit();
    }
});


// Electron�̏�����������Ɏ��s
app.on("ready", () => {
    //�E�B���h�E�T�C�Y��1280*720�i�t���[���T�C�Y���܂܂Ȃ��j�ɐݒ肷��
    mainWindow = new BrowserWindow({ width: 1280, height: 720, useContentSize: true });
    //�g�p����html�t�@�C�����w�肷��
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // �E�B���h�E������ꂽ��A�v�����I��
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});

