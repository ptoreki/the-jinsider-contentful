import { createClient, EntryCollection } from 'contentful'
import { IPostFields, IProfileFields } from '../@types/generated/contentful'

const useContentful = () => {
    const client = createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || "",
        accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN || "",
    })

    const getAllProfiles = async () => {
      try {
        const entries = await client.getEntries<IProfileFields>({
          content_type: "profile",
        });
    
        if (entries.items.length) {
          return entries;
        }
    
        // Return an empty entry collection when there are no profiles
        return {
          items: [],
          total: 0,
          skip: 0,
          limit: 0,
          sys: {
            type: "Array",
          },
        };
      } catch (error) {
        console.error(error);
      }
    };

    const getProfiles = async () => {
        try{
          const entries = await client.getEntries<IProfileFields>({
            content_type: "profile",
            select: "fields",
            order: "fields.name"
        })
          return entries
        } catch (error) {
            console.log(`Error fetching profiles: ${error}`)
        }
    }
 
    const getPosts = async () => {
        try{
          const entries = await client.getEntries<IPostFields>({
            content_type: "post",
            select: "fields"
          })
          return entries
        } catch (error) {
            console.log(`Error fetching posts: ${error}`)
        }
    }

    const getPostById = async (postId: string) => {
        try {
          const entry = await client.getEntry<IPostFields>(postId);
          return entry;
        } catch (error) {
          console.log(`Error fetching post by id: ${error}`);
        }
      };

    const getLatestPost = async () => {
        try {
          const entries = await client.getEntries<IPostFields>({
            content_type: "post",
            select: "fields",
            order: "-sys.createdAt",
            limit: 1
          })
          return entries
        } catch (error) {
          console.log(`Error fetching latest post: ${error}`)
        }
      }

    return { getProfiles, getPosts, getPostById, getLatestPost, getAllProfiles } 
}

export default useContentful