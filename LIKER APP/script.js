let likeCount = Number(localStorage.getItem("likeCount") || 0);
const likeCounts = document.getElementById("LikeCount");
likeCounts.innerHTML = likeCount;
document.getElementById("like").addEventListener("click", () => {
    likeCount++;
    likeCounts.innerHTML = likeCount;
    localStorage.setItem("likeCount", likeCount);
});

let CommentCount = Number(localStorage.getItem("commentCount") || 0);
const commentCounts = document.getElementById("CommentCount");
commentCounts.innerHTML = CommentCount;
document.getElementById("comment").addEventListener("click", () => {
    CommentCount++;
    commentCounts.innerHTML = CommentCount;
    localStorage.setItem("commentCount", CommentCount);
});

let shareCount = Number(sessionStorage.getItem("share") || 0);
const shareCounts = document.getElementById("ShareCount");
shareCounts.innerHTML = shareCount;

document.getElementById("share").addEventListener("click", () => {
    shareCount++;
    shareCounts.innerHTML = shareCount;
    sessionStorage.setItem("share", shareCount);
});

let downloadCount = Number(sessionStorage.getItem("downloadCount") || 0);
const downloadCounts = document.getElementById("DownloadCount");
downloadCounts.innerHTML = downloadCount;

document.getElementById("download").addEventListener("click", () => {
    downloadCount++;
    downloadCounts.innerHTML = downloadCount;
    sessionStorage.setItem("downloadCount", downloadCount);
});