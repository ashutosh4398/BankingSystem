def update_current_amount(sender,instance, created, *args, **kwargs):
    if instance.is_approved:
        instance.user.current_balance += instance.amount
        instance.user.save()