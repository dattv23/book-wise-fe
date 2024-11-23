export type Blog = {
  id: string
  time: string
  title: string
  imageUrl: string
  details: BlogDetails
}

type BlogDetails = {
  subtitle: string
  author: string
  description: string
  content: string
}
