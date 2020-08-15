import pages from "./pages.js"
// history管理
class HistoryManagement {
    // 当前页面url
    static current() {
        const hash = window.location.hash.slice(1);
        const router = pages.find((page) => page.url === hash) || pages[0];
        return router;
    }

    // 切换页面
    static changePage(path) {
        window.location.hash = path;
    }
}

export default HistoryManagement