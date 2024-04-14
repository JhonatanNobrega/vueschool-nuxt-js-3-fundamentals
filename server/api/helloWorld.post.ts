export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return {
    message: event.method + ' Hello world',
    body: body
  }
})
