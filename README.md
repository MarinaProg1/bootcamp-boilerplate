# 🚀 Guía de Instalación y Prueba de la API Salita Municipal- Grupo Room 1

## ⚙️ Pasos para Clonar e Instalar

### 1. Clonar el repositorio
Abre tu terminal y ejecuta:
```
git clone https://github.com/MarinaProg1/bootcamp-boilerplate.git
cd bootcamp-boilerplate
code .

```
Una vez clonado, con code . se abre en la interfaz de Visual Studio Code

### 2.Instalar dependencias
-Abrir una nueva terminal en Visual Studio Code y ejecuta:

```
npm install

```
-Crear el archivo .env
En la terminal ejecuta:
```
touch .env

```
-Define las variables necesarias según la configuración del proyecto. 
Puedes usar la siguiente estructura como ejemplo:
```
PORT=<NUMERO DE PUERTO>
ENTORNO= development
DATABASE_URL=mongodb://localhost:27017/<NOMBRE DE LA BASE DE DATOS>

```
### 3.Ejecución del Servidor
En la terminal ejecuta:

```
npm run dev
```
# 🧪 Cómo Probar los Endpoints
En Posman :
### POST URL-BASE/api/v1/pacientes
```
{
  "nombre": "María González",
  "dni": "28765432",
  "direccion": {
    "calle": "Belgrano",
    "numero": "456",
    "barrio": "Norte"
  },
  "email": "maria.gonzalez@hotmail.com",
  "telefono": {
    "tipo": "FIJO",
    "codigoArea": "3777",
    "numero": "4455667"
  },
  "obraSocial": {
    "nombre": "PAMI",
    "numeroAfiliado": "PAM987654"
  }
}
```
### GET URL-BASE/api/v1/pacientes
Devuelve:
```
{
    "success": true,
    "timestamp": "2026-08-07T12:14:07.162Z",
    "message": "Pacientes obtenidos exitosamente",
    "total": 3,
    "data": [
        {
            "direccion": {
                "calle": "Belgrano",
                "numero": "234",
                "piso": "12",
                "departamento": "A"
            },
            "telefono": {
                "tipo": "TRABAJO",
                "codigoArea": "011",
                "numero": "43219876"
            },
            "obraSocial": {
                "nombre": "SWISS MEDICAL",
                "numeroAfiliado": "SM-9876543"
            },
            "nombre": "CAROLINA BIANCHI",
            "dni": "38456123",
            "email": "caro.bianchi@email.com",
            "createdAt": "2026-08-01T20:28:28.620Z",
            "updatedAt": "2026-08-01T20:28:28.620Z",
            "id": "6a6e56ec0b640089be6b7531"
        },
        {
            "direccion": {
                "calle": "San Martín",
                "numero": "1234",
                "piso": "2",
                "departamento": "A",
                "barrio": "Centro"
            },
            "telefono": {
                "tipo": "CELULAR",
                "codigoArea": "379",
                "numero": "4567890"
            },
            "obraSocial": {
                "nombre": "OSDE",
                "numeroAfiliado": "OSD123456"
            },
            "nombre": "JUAN PÉREZ",
            "dni": "32145678",
            "email": "juan.perez@gmail.com",
            "createdAt": "2026-08-01T20:29:13.725Z",
            "updatedAt": "2026-08-01T20:29:13.725Z",
            "id": "6a6e57190b640089be6b7532"
        },
        {
            "direccion": {
                "calle": "Belgrano",
                "numero": "456",
                "barrio": "Norte"
            },
            "telefono": {
                "tipo": "FIJO",
                "codigoArea": "3777",
                "numero": "4455667"
            },
            "obraSocial": {
                "nombre": "PAMI",
                "numeroAfiliado": "PAM987654"
            },
            "nombre": "MARÍA GONZÁLEZ",
            "dni": "28765432",
            "email": "maria.gonzalez@hotmail.com",
            "createdAt": "2026-08-01T20:30:26.365Z",
            "updatedAt": "2026-08-01T20:30:26.365Z",
            "id": "6a6e57620b640089be6b7533"
        }
    ]
}
```
### POST URL-BASE/api/v1/especialidades
```
{
  "nombre": "Kinesiología",
  "descripcion": "Tratamiento y rehabilitación física mediante técnicas terapéuticas.",
  "categoria": "Terapéutica"
}
```
### POST URL-BASE/api/v1/medicos
```
{
  "nombre": "Ana Fernández",
  "matricula": "MP10004",
  "especialidad": "6a6e57e40b640089be6b7537", // Cambiar por un id de especialidad generada anteriormente
  "telefono": {
    "tipo": "CELULAR",
    "codigoArea": "341",
    "numero": "5234789"
  },
  "email": "ana.fernandez@hospital.com"
}
```
### GET URL-BASE/api/v1/medicos
Devuelve:
```
{
    "success": true,
    "timestamp": "2026-08-07T12:22:53.020Z",
    "message": "Médicos obtenidos exitosamente",
    "total": 3,
    "data": [
        {
            "telefono": {
                "tipo": "CELULAR",
                "codigoArea": "379",
                "numero": "4567890"
            },
            "nombre": "JUAN CARLOS PÉREZ",
            "matricula": "MP10001",
            "especialidad": {
                "_id": "6a6e57bc0b640089be6b7534",
                "nombre": "Clínica Médica",
                "descripcion": "Atención integral de pacientes adultos, diagnóstico y tratamiento de enfermedades clínicas.",
                "categoria": "Clínica",
                "createdAt": "2026-08-01T20:31:56.619Z",
                "updatedAt": "2026-08-01T20:31:56.619Z",
                "__v": 0
            },
            "email": "juan.perez@hospital.com",
            "createdAt": "2026-08-01T20:35:09.627Z",
            "updatedAt": "2026-08-01T20:35:09.627Z",
            "id": "6a6e587d0b640089be6b7538"
        },
        {
            "telefono": {
                "tipo": "TRABAJO",
                "codigoArea": "11",
                "numero": "43219876"
            },
            "nombre": "CARLOS RAMÍREZ",
            "matricula": "MP10003",
            "especialidad": {
                "_id": "6a6e57d70b640089be6b7536",
                "nombre": "Diagnóstico por Imágenes",
                "descripcion": "Realización e interpretación de estudios como radiografías, tomografías y resonancias.",
                "categoria": "Diagnóstico",
                "createdAt": "2026-08-01T20:32:23.462Z",
                "updatedAt": "2026-08-01T20:32:23.462Z",
                "__v": 0
            },
            "email": "carlos.ramirez@hospital.com",
            "createdAt": "2026-08-01T20:35:53.979Z",
            "updatedAt": "2026-08-01T20:35:53.979Z",
            "id": "6a6e58a90b640089be6b753a"
        },
        {
            "telefono": {
                "tipo": "CELULAR",
                "codigoArea": "341",
                "numero": "5234789"
            },
            "nombre": "ANA FERNÁNDEZ",
            "matricula": "MP10004",
            "especialidad": {
                "_id": "6a6e57e40b640089be6b7537",
                "nombre": "Kinesiología",
                "descripcion": "Tratamiento y rehabilitación física mediante técnicas terapéuticas.",
                "categoria": "Terapéutica",
                "createdAt": "2026-08-01T20:32:36.620Z",
                "updatedAt": "2026-08-01T20:32:36.620Z",
                "__v": 0
            },
            "email": "ana.fernandez@hospital.com",
            "createdAt": "2026-08-01T20:36:06.702Z",
            "updatedAt": "2026-08-01T20:36:06.702Z",
            "id": "6a6e58b60b640089be6b753b"
        }
    ]
}
```
### POST URL-BASE/api/v1/consultorios
```
{
  "medico": "6a6e58b60b640089be6b753b",// Cambiar por un id de medico generado anteriormente
  "especialidad": "6a6e57e40b640089be6b7537",// Cambiar por un id de especialidad existente
  "horarios": {
    "dias": [
      "Martes",
      "Jueves",
      "Viernes"
    ],
    "horarioMañana": {
      "inicio": "09:00",
      "fin": "13:00"
    },
    "horarioTarde": {
      "inicio": "16:00",
      "fin": "20:00"
    }
  },
  "numeroConsultorio": "205",
  "direccion": "San Martín 850",
  "piso": "2",
  "telefono": {
    "codigoArea": "341",
    "numero": "5234789"
  },
  "email": "consultorio.ana@hospital.com"
}
```
### GET URL-BASE/api/v1/consultorios
```
{
    "success": true,
    "timestamp": "2026-08-07T12:24:06.270Z",
    "message": "Consultorios obtenidos exitosamente",
    "total": 2,
    "data": [
        {
            "horarios": {
                "horarioMañana": {
                    "inicio": "08:00",
                    "fin": "12:00"
                },
                "horarioTarde": {
                    "inicio": "14:00",
                    "fin": "18:00"
                },
                "dias": [
                    "Lunes",
                    "Miércoles",
                    "Viernes"
                ]
            },
            "telefono": {
                "codigoArea": "379",
                "numero": "4455667"
            },
            "medico": {
                "telefono": {
                    "tipo": "TRABAJO",
                    "codigoArea": "11",
                    "numero": "43219876"
                },
                "nombre": "CARLOS RAMÍREZ",
                "matricula": "MP10003",
                "especialidad": "6a6e57d70b640089be6b7536",
                "email": "carlos.ramirez@hospital.com",
                "createdAt": "2026-08-01T20:35:53.979Z",
                "updatedAt": "2026-08-01T20:35:53.979Z",
                "id": "6a6e58a90b640089be6b753a"
            },
            "especialidad": {
                "_id": "6a6e57d70b640089be6b7536",
                "nombre": "Diagnóstico por Imágenes",
                "descripcion": "Realización e interpretación de estudios como radiografías, tomografías y resonancias.",
                "categoria": "Diagnóstico",
                "createdAt": "2026-08-01T20:32:23.462Z",
                "updatedAt": "2026-08-01T20:32:23.462Z",
                "__v": 0
            },
            "numeroConsultorio": "101",
            "direccion": "Av. Independencia 1250",
            "piso": "1",
            "email": "consultorio.carlos@hospital.com",
            "createdAt": "2026-08-01T20:45:01.311Z",
            "updatedAt": "2026-08-01T20:45:01.311Z",
            "id": "6a6e5acd0b640089be6b753c"
        },
        {
            "horarios": {
                "horarioMañana": {
                    "inicio": "09:00",
                    "fin": "13:00"
                },
                "horarioTarde": {
                    "inicio": "15:00",
                    "fin": "19:00"
                },
                "dias": [
                    "Martes",
                    "Jueves",
                    "Sábado"
                ]
            },
            "telefono": {
                "codigoArea": "341",
                "numero": "5234789"
            },
            "medico": {
                "telefono": {
                    "tipo": "CELULAR",
                    "codigoArea": "341",
                    "numero": "5234789"
                },
                "nombre": "ANA FERNÁNDEZ",
                "matricula": "MP10004",
                "especialidad": "6a6e57e40b640089be6b7537",
                "email": "ana.fernandez@hospital.com",
                "createdAt": "2026-08-01T20:36:06.702Z",
                "updatedAt": "2026-08-01T20:36:06.702Z",
                "id": "6a6e58b60b640089be6b753b"
            },
            "especialidad": {
                "_id": "6a6e57e40b640089be6b7537",
                "nombre": "Kinesiología",
                "descripcion": "Tratamiento y rehabilitación física mediante técnicas terapéuticas.",
                "categoria": "Terapéutica",
                "createdAt": "2026-08-01T20:32:36.620Z",
                "updatedAt": "2026-08-01T20:32:36.620Z",
                "__v": 0
            },
            "numeroConsultorio": "205",
            "direccion": "San Martín 850",
            "piso": "2",
            "email": "consultorio.ana@hospital.com",
            "createdAt": "2026-08-01T20:45:29.177Z",
            "updatedAt": "2026-08-01T20:45:29.177Z",
            "id": "6a6e5ae90b640089be6b753d"
        }
    ]
}
```
### POST URL-BASE/api/v1/historias-clinicas

```
{
  "paciente": "6a6e57620b640089be6b7533",// Cambiar por un id de un paciente existente
  "medico": "6a6e58a90b640089be6b753a",// Cambiar por un id de un medico existente
  "fecha": "2026-12-22T10:00:00.000Z",
  "antecedentes": {
    "alergias": [
      "Ibuprofeno"
    ],
    "enfermedadesCronicas": [
      "Diabetes tipo 2"
    ],
    "medicamentosHabituales": [
      "Metformina 850 mg"
    ],
    "cirugiasPrevias": [
      "Colecistectomía"
    ],
    "internacionesPrevias": [
      "2019 - Neumonía"
    ],
    "antecedentesFamiliares": [
      "Enfermedad cardiovascular"
    ],
    "vacunas": [
      "COVID-19",
      "Antitetánica"
    ],
    "habitos": {
      "tabaquismo": false,
      "alcohol": false,
      "actividadFisica": "Baja"
    },
    "otros": "Debe controlar glucemia periódicamente."
  },
  "motivoConsulta": "Dolor en el pecho.",
  "sintomas": [
    "Dolor torácico",
    "Fatiga"
  ],
  "diagnostico": "Angina estable.",
  "tratamiento": "Electrocardiograma, medicación y seguimiento por cardiología.",
  "observaciones": "Se solicita control dentro de los próximos 15 días."
}
```
### GET URL-BASE/api/v1/historias-clinicas
Devuelve:
```
{
    "success": true,
    "timestamp": "2026-08-07T12:25:29.111Z",
    "message": "Historias clínicas obtenidas exitosamente",
    "total": 3,
    "data": [
        {
            "antecedentes": {
                "habitos": {
                    "tabaquismo": false,
                    "alcohol": true,
                    "actividadFisica": "Moderada"
                },
                "alergias": [
                    "Penicilina"
                ],
                "enfermedadesCronicas": [
                    "Hipertensión"
                ],
                "medicamentosHabituales": [
                    "Losartán 50 mg"
                ],
                "cirugiasPrevias": [
                    "Apendicectomía (2018)"
                ],
                "internacionesPrevias": [],
                "antecedentesFamiliares": [
                    "Diabetes tipo 2"
                ],
                "vacunas": [
                    "COVID-19",
                    "Antigripal 2026"
                ],
                "otros": "Paciente con controles médicos anuales."
            },
            "paciente": {
                "direccion": {
                    "calle": "Belgrano",
                    "numero": "234",
                    "piso": "12",
                    "departamento": "A"
                },
                "telefono": {
                    "tipo": "TRABAJO",
                    "codigoArea": "011",
                    "numero": "43219876"
                },
                "obraSocial": {
                    "nombre": "SWISS MEDICAL",
                    "numeroAfiliado": "SM-9876543"
                },
                "nombre": "CAROLINA BIANCHI",
                "dni": "38456123",
                "email": "caro.bianchi@email.com",
                "createdAt": "2026-08-01T20:28:28.620Z",
                "updatedAt": "2026-08-01T20:28:28.620Z",
                "id": "6a6e56ec0b640089be6b7531"
            },
            "medico": {
                "nombre": "CARLOS RAMÍREZ",
                "especialidad": "6a6e57d70b640089be6b7536",
                "id": "6a6e58a90b640089be6b753a"
            },
            "fecha": "2026-12-15T09:30:00.000Z",
            "motivoConsulta": "Dolor de cabeza persistente.",
            "sintomas": [
                "Cefalea",
                "Mareos",
                "Visión borrosa"
            ],
            "diagnostico": "Hipertensión arterial no controlada.",
            "tratamiento": "Ajuste de medicación antihipertensiva y control en 30 días.",
            "observaciones": "Se recomienda disminuir el consumo de sal y realizar actividad física.",
            "createdAt": "2026-08-01T20:54:09.021Z",
            "updatedAt": "2026-08-01T20:54:09.021Z",
            "id": "6a6e5cf00b640089be6b753e"
        },
        {
            "antecedentes": {
                "habitos": {
                    "tabaquismo": false,
                    "alcohol": false,
                    "actividadFisica": "Alta"
                },
                "alergias": [],
                "enfermedadesCronicas": [],
                "medicamentosHabituales": [],
                "cirugiasPrevias": [],
                "internacionesPrevias": [],
                "antecedentesFamiliares": [
                    "Hipertensión"
                ],
                "vacunas": [
                    "COVID-19",
                    "Hepatitis B"
                ],
                "otros": "Paciente deportista."
            },
            "paciente": {
                "direccion": {
                    "calle": "San Martín",
                    "numero": "1234",
                    "piso": "2",
                    "departamento": "A",
                    "barrio": "Centro"
                },
                "telefono": {
                    "tipo": "CELULAR",
                    "codigoArea": "379",
                    "numero": "4567890"
                },
                "obraSocial": {
                    "nombre": "OSDE",
                    "numeroAfiliado": "OSD123456"
                },
                "nombre": "JUAN PÉREZ",
                "dni": "32145678",
                "email": "juan.perez@gmail.com",
                "createdAt": "2026-08-01T20:29:13.725Z",
                "updatedAt": "2026-08-01T20:29:13.725Z",
                "id": "6a6e57190b640089be6b7532"
            },
            "medico": {
                "nombre": "ANA FERNÁNDEZ",
                "especialidad": "6a6e57e40b640089be6b7537",
                "id": "6a6e58b60b640089be6b753b"
            },
            "fecha": "2026-12-18T15:00:00.000Z",
            "motivoConsulta": "Dolor lumbar.",
            "sintomas": [
                "Dolor lumbar",
                "Rigidez muscular"
            ],
            "diagnostico": "Lumbalgia mecánica.",
            "tratamiento": "Sesiones de kinesiología dos veces por semana durante un mes.",
            "observaciones": "Evitar levantar peso y mantener ejercicios de estiramiento.",
            "createdAt": "2026-08-01T20:54:30.508Z",
            "updatedAt": "2026-08-01T20:54:30.508Z",
            "id": "6a6e5d060b640089be6b753f"
        },
        {
            "antecedentes": {
                "habitos": {
                    "tabaquismo": false,
                    "alcohol": false,
                    "actividadFisica": "Baja"
                },
                "alergias": [
                    "Ibuprofeno"
                ],
                "enfermedadesCronicas": [
                    "Diabetes tipo 2"
                ],
                "medicamentosHabituales": [
                    "Metformina 850 mg"
                ],
                "cirugiasPrevias": [
                    "Colecistectomía"
                ],
                "internacionesPrevias": [
                    "2019 - Neumonía"
                ],
                "antecedentesFamiliares": [
                    "Enfermedad cardiovascular"
                ],
                "vacunas": [
                    "COVID-19",
                    "Antitetánica"
                ],
                "otros": "Debe controlar glucemia periódicamente."
            },
            "paciente": {
                "direccion": {
                    "calle": "Belgrano",
                    "numero": "456",
                    "barrio": "Norte"
                },
                "telefono": {
                    "tipo": "FIJO",
                    "codigoArea": "3777",
                    "numero": "4455667"
                },
                "obraSocial": {
                    "nombre": "PAMI",
                    "numeroAfiliado": "PAM987654"
                },
                "nombre": "MARÍA GONZÁLEZ",
                "dni": "28765432",
                "email": "maria.gonzalez@hotmail.com",
                "createdAt": "2026-08-01T20:30:26.365Z",
                "updatedAt": "2026-08-01T20:30:26.365Z",
                "id": "6a6e57620b640089be6b7533"
            },
            "medico": {
                "nombre": "CARLOS RAMÍREZ",
                "especialidad": "6a6e57d70b640089be6b7536",
                "id": "6a6e58a90b640089be6b753a"
            },
            "fecha": "2026-12-22T10:00:00.000Z",
            "motivoConsulta": "Dolor en el pecho.",
            "sintomas": [
                "Dolor torácico",
                "Fatiga"
            ],
            "diagnostico": "Angina estable.",
            "tratamiento": "Electrocardiograma, medicación y seguimiento por cardiología.",
            "observaciones": "Se solicita control dentro de los próximos 15 días.",
            "createdAt": "2026-08-01T20:54:47.321Z",
            "updatedAt": "2026-08-01T20:54:47.321Z",
            "id": "6a6e5d170b640089be6b7540"
        }
    ]
}

```

