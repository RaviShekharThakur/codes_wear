import { useRouter } from 'next/router'
 
export default function Slug() {
  const router = useRouter()
  return <p>slug: {router.query.slug}</p>
}