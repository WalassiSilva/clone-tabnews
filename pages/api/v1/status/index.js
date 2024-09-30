export default function status(request, response) {
  response.status(200).json({ message: "Olá Dev! Tudo bom com você?" });
}
