import request from "./request";

/**
 * 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}

/**
 * 获取博客分类
 */
export async function getBlogTypes() {
  return await request.get("/api/blogtype");
}

// 详情页

/**
 * 获取单个博客
 * @param {Number} id 博客id
 * @returns
 */
export async function getBlog(id) {
  return await request(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param {*} commentInfo 评论信息
 * @returns
 */
export async function postComment(commentInfo) {
  return await request(`/api/comment/`, commentInfo);
}

/**
 * 分页获取评论
 */
export async function getComments(blogid, page = 1, limit = 10) {
  return await request("/api/comment", {
    params: {
      blogid,
      page,
      limit
    }
  })
}