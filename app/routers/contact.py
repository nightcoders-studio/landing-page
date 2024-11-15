from fastapi import APIRouter, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from ..models import ContactForm, ContactResponse
from ..database import get_database

router = APIRouter()

@router.post("/contact", response_model=ContactResponse)
async def create_contact(
    contact: ContactForm,
    db: AsyncIOMotorDatabase = Depends(get_database)
):
    """
    Create a new contact form.

    Args:
        contact (ContactForm): Contact form data.

    Returns:
        ContactResponse: Created contact form with its ID.
    """
    contact_dict = contact.dict()
    result = await db.contacts.insert_one(contact_dict)
    created_contact = await db.contacts.find_one({"_id": result.inserted_id})
    return ContactResponse(
        id=str(created_contact["_id"]),
        **{k: v for k, v in created_contact.items() if k != "_id"}
    )

@router.get("/contacts", response_model=list[ContactResponse])
async def get_contacts(db: AsyncIOMotorDatabase = Depends(get_database)):
    """
    Get a list of all contacts.

    Returns:
        list[ContactResponse]: List of contacts.
    """
    contacts = await db.contacts.find().to_list(1000)
    return [
        ContactResponse(
            id=str(contact["_id"]),
            **{k: v for k, v in contact.items() if k != "_id"}
        )
        for contact in contacts
    ]