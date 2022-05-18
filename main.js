// Electron을 실행하는 데 필요한 모듈 가져오기
const { app, Menu, Tray, BrowserWindow, ipcMain, globalShortcut, nativeImage, ipcRenderer } = require( 'electron' );

// Electron의 라이프사이클 정의
let mainWindow // 메인 윈도우를 나타내는 변수
app.on( 'ready' , createWindow)
app.on( 'window-all-closed' , function () {
  if (process.platform !== 'darwin' ) app.quit()
} )
app.on( 'activate' , function () {
  if (mainWindow === null ) createWindow()
} )
// 창을 만들고 내용 로드
function createWindow() {
  mainWindow = new BrowserWindow( { width: 800, height: 600,
    webPreferences: { nodeIntegration: true }
  })
  
  const isDev = false;

  const startURL = isDev ? 'http://localhost:3000' : `file://${__dirname}/public/index.html`;
  mainWindow.loadURL(startURL);
  


  ipcMain.on('hi', (event, arg) => {
    event.sender.send('bye', 'bye')
  });

  
  // 창이 닫힐 때의 처리
  mainWindow.on( 'closed' , function () {
    mainWindow = null
  } )

}


