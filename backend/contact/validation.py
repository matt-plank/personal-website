import re


def validate_email(email: str) -> bool:
    """Return true of the email is valid."""
    return bool(re.match(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", email))


def validate_name(name: str) -> bool:
    """Return true if the name is valid.

    Must contain two or more words separated by spaces or hyphens.
    Must not contain numbers or special characters.
    """
    return bool(re.match(r"^[a-zA-Z]+[- ]?[a-zA-Z]+$", name))
