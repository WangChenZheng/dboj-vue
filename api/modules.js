import request from "./request";

export function getChapterTree() {
    return request({
        url: `/judger/module/chapterTree`,
        method: 'get'
    })
}