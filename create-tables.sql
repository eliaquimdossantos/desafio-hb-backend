CREATE TABLE public.users (
    id CHAR(26) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE sales (
    id CHAR(26) PRIMARY KEY,
    customer_id CHAR(26) NOT NULL REFERENCES public.users (id) ON UPDATE CASCADE,
    total_price DECIMAL(10, 2) NOT NULL DEFAULT 0.0,
    status VARCHAR(20) CHECK (status IN ('open', 'completed', 'canceled')) DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE suppliers (
    id CHAR(26) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255),
    phone VARCHAR(20) NOT NULL,
    cnpj VARCHAR(20) NOT NULL UNIQUE,
    full_address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE purchases (
    id CHAR(26) PRIMARY KEY,
    sale_id CHAR(26) NOT NULL REFERENCES sales(id) ON UPDATE CASCADE ON DELETE CASCADE,
    supplier_id CHAR(26) NOT NULL REFERENCES suppliers(id) ON UPDATE CASCADE,
    nfe_number VARCHAR(50), 
    total_price DECIMAL(10, 2) NOT NULL DEFAULT 0.0,
    status VARCHAR(20) CHECK (status IN ('pending', 'received', 'canceled')) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id CHAR(26) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sales_products (
    id CHAR(26) PRIMARY KEY,
    sale_id CHAR(26) NOT NULL REFERENCES sales(id) ON UPDATE CASCADE ON DELETE CASCADE,
    purchase_id CHAR(26) REFERENCES purchases(id) ON UPDATE CASCADE ON DELETE SET NULL,
    product_id CHAR(26) NOT NULL REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2)
);