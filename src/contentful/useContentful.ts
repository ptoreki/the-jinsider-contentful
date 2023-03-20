import { createClient } from 'contentful'
import { IPostFields, IProfileFields } from '../@types/generated/contentful'

const useContentful = () => {
    const client = createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || "",
        accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN || "",
    })

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

    return { getProfiles, getPosts, getLatestPost } 
}

export default useContentful