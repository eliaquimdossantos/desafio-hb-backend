import { PrismaClient } from '@prisma/client';
import User from 'src/users/entities/user.entity';

const prisma = new PrismaClient();

async function main() {
  // Criar usuários
  await prisma.users.createMany({
    data: [
      { name: 'Paulo Souza', email: 'psouza@gmail.com', password: '12345678' },
      { name: 'Ana Lima', email: 'alima@gmail.com', password: '12345678' },
      { name: 'Carlos Silva', email: 'csilva@gmail.com', password: '12345678' },
      {
        name: 'Fernanda Oliveira',
        email: 'foliveira@gmail.com',
        password: '12345678',
      },
      {
        name: 'Ricardo Santos',
        email: 'rsantos@gmail.com',
        password: '12345678',
      },
      {
        name: 'Juliana Costa',
        email: 'jcosta@gmail.com',
        password: '12345678',
      },
      {
        name: 'Gustavo Mendes',
        email: 'gmendes@gmail.com',
        password: '12345678',
      },
      {
        name: 'Mariana Nunes',
        email: 'mnunes@gmail.com',
        password: '12345678',
      },
      { name: 'Felipe Rocha', email: 'frocha@gmail.com', password: '12345678' },
      {
        name: 'Camila Martins',
        email: 'cmartins@gmail.com',
        password: '12345678',
      },
    ],
  });

  // Criar suppliers
  await prisma.suppliers.createMany({
    data: [
      {
        name: 'Auto Peças JD',
        email: null,
        phone: '84987853072',
        cnpj: '1234654879213',
        full_address: null,
      },
      {
        name: 'Mega Distribuidora de Peças',
        email: null,
        phone: '84987123456',
        cnpj: '9876543210001',
        full_address: null,
      },
      {
        name: 'Norte Auto Parts',
        email: null,
        phone: '84987654321',
        cnpj: '6543219876543',
        full_address: null,
      },
      {
        name: 'Distribuidora São Paulo Auto Peças',
        email: null,
        phone: '84981234567',
        cnpj: '3216549870002',
        full_address: null,
      },
      {
        name: 'Atacadão das Peças',
        email: null,
        phone: '84983456789',
        cnpj: '7891236540003',
        full_address: null,
      },
      {
        name: 'Fornecedora Rio Grande Auto',
        email: null,
        phone: '84984567890',
        cnpj: '8529637410004',
        full_address: null,
      },
      {
        name: 'Grupo Logística Center Peças',
        email: null,
        phone: '84985678901',
        cnpj: '9517538520005',
        full_address: null,
      },
      {
        name: 'Super Distribuidora de Auto Peças',
        email: null,
        phone: '84986789012',
        cnpj: '1593574560006',
        full_address: null,
      },
      {
        name: 'Central de Peças Automotivas',
        email: null,
        phone: '84987890123',
        cnpj: '3571598520007',
        full_address: null,
      },
      {
        name: 'Master Auto Peças Distribuidora',
        email: null,
        phone: '84988901234',
        cnpj: '7539512580008',
        full_address: null,
      },
    ],
  });

  // Criar Produtos
  await prisma.products.createMany({
    data: [
      { name: 'Amortecedor Dianteiro BMW X5', price: 5394.0 },
      { name: 'Pastilha de Freio Cerâmica Honda Civic', price: 349.9 },
      { name: 'Bateria Moura 60Ah', price: 499.0 },
      { name: 'Filtro de Óleo Motor VW Golf', price: 45.9 },
      { name: 'Jogo de Velas NGK Iridium Toyota Corolla', price: 229.9 },
      { name: 'Pneu Michelin Primacy 4 205/55 R16', price: 899.9 },
      { name: 'Óleo Sintético Mobil 1 5W30 1L', price: 79.9 },
      { name: 'Correia Dentada Contitech Ford Focus', price: 189.0 },
      { name: 'Kit Embreagem Sachs Chevrolet Onix', price: 1199.0 },
      { name: 'Radiador Valeo Fiat Argo', price: 689.0 },
      { name: 'Sensor de Oxigênio Bosch Chevrolet Cruze', price: 389.9 },
      { name: 'Bomba de Combustível Delphi Hyundai HB20', price: 749.0 },
      { name: 'Disco de Freio Dianteiro Fremax Toyota Hilux', price: 569.9 },
      { name: 'Kit Suspensão Completa Honda Fit', price: 1349.0 },
      { name: 'Junta Homocinética Nakata Volkswagen Polo', price: 299.9 },
      { name: 'Bobina de Ignição Bosch Nissan Sentra', price: 199.9 },
      { name: 'Coxim do Motor Axios Fiat Toro', price: 279.9 },
      {
        name: 'Modulo de Injeção Eletrônica Magneti Marelli Renault Sandero',
        price: 1459.0,
      },
      { name: 'Kit de Reparo Caixa de Direção Ford Ranger', price: 1899.0 },
      { name: 'Turbina Garrett Mercedes Sprinter', price: 5499.0 },
      { name: 'Compressor de Ar Condicionado Denso Toyota SW4', price: 2499.0 },
      { name: 'Farol Dianteiro Completo Valeo Chevrolet S10', price: 1599.0 },
      { name: 'Lanterna Traseira Original Volkswagen Amarok', price: 1299.0 },
      { name: 'Parachoque Dianteiro Pintado Hyundai Creta', price: 1099.0 },
      { name: 'Câmbio Manual Completo Fiat Strada', price: 7499.0 },
      { name: 'Alternador Bosch 90A Ford Ecosport', price: 699.0 },
      { name: 'Eixo Traseiro Completo Peugeot 206', price: 2599.0 },
      { name: 'Válvula Termostática Mahle Volkswagen Jetta', price: 129.9 },
      { name: 'Sensor de Estacionamento Original Honda HR-V', price: 249.9 },
    ],
  });

  // Função para gerar status aleatório
  const getRandomStatus = () => {
    const statuses = ['open', 'completed', 'canceled'];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };

  const createdUsers = await prisma.users.findMany();

  // Criar vendas associadas aos usuários com status aleatório
  await prisma.sales.createMany({
    data: createdUsers.map((user: User) => ({
      customer_id: user.id,
      status: getRandomStatus(),
    })),
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
