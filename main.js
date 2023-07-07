function changeContent(page){
    var contentDiv = document.getElementById('content')
    var contentFrame = document.getElementById('frame')

    // Thêm nội dung mới dựa trên trang được chọn
    if (page === 'aboutMe.html') {
        contentFrame.setAttribute('src',page)
    }
}
