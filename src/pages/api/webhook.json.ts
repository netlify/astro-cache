import { purgeCache } from '@netlify/functions'

export async function POST({ request }:any) {
  const body = await request.json()
  const id = Number(body.entity.id).toString()

  purgeCache({ tags: [id] }).catch((error) => {
    return new Response(JSON.stringify({
      message: `Failed to revalidate article with id ${id}`,
      error: error.message,
    }), { status: 500 });
  })

  return new Response(JSON.stringify({
    message: `Revalidated article with id ${id}`,
  }), { status: 200 });
}