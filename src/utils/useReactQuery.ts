import { useQuery } from "@tanstack/react-query";
import useContentful from "../contentful/useContentful";

export const usePosts = () => {
    const { getPosts } = useContentful();
    const sortPosts= () => {
       return getPosts().then((response) => {
        if (response) {
          const sortedPosts = response.items.sort((a, b) => {
            return new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime();
          });
          return {...response, items: sortedPosts }
       }});
      }
    return useQuery(["posts"], sortPosts)
}

export const usePostById = (postId?: string) => {
  const { getPostById } = useContentful();
  const fetch = () => {
    return getPostById(postId as string)
  }
  return useQuery([postId], fetch ,{ enabled: postId !== undefined})
}

export const useLatestPost = () => {
  const { getLatestPost } =  useContentful();
  const fetch = () => {
    return getLatestPost()
  }
  return useQuery(["latestPosts"], fetch)
}