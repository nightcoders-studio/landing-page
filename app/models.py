from pydantic import BaseModel, EmailStr
from typing import Optional

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    budget: str
    message: str

class ContactResponse(BaseModel):
    id: str
    name: str
    email: EmailStr
    budget: str
    message: str
