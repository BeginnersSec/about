if (navigator.userAgentData && navigator.userAgentData.mobile) {
    const header = document.querySelector("header")
    const title = document.createElement("h1")
    const headerctx = document.createElement("div")
    const headerlist = document.createElement("ul")
    const headercontent = document.createElement("li")
    const toAbout = document.createElement("a")
    const mobileMsg = document.createElement("h3")
    header.innerHTML = ""
    title.id = "title"
    title.textContent = "Beginners Sec"
    headerlist.id = "headerUrlList"
    toAbout.href = "./about.html"
    toAbout.textContent = " About / Join "
    headercontent.appendChild(toAbout)
    headerlist.appendChild(headercontent)
    headerctx.appendChild(headerlist)
    mobileMsg.textContent = "一部動作はPCのみ対応します。"
    header.appendChild(title)
    header.appendChild(headerctx)
    header.appendChild(mobileMsg)
}