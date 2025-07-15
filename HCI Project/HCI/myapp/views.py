from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from .models import Data
# Create your views here.

def base(request):
    return render(request, 'base.html')
 

def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'sign-up.html')

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def services(request):
    return render(request, 'services.html')

def development(request):
    return render(request, 'development.html')

def design(request):
    return render(request, 'design.html')

def marketing(request):
    return render(request, 'marketing.html')

def projects(request):
    return render(request, 'projects.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        full_message = (
            f"From: {name}\n"
            f"Phone: {phone}\n"
            f"Email: {email}\n"
            f"Subject: {subject}\n"
            f"Message: {message}"
        )
        
        try:
            send_mail(
                subject=f"New Contact: {subject}",
                message=full_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['faizanqamar577@gmail.com'],
                fail_silently=False,
            )
            return JsonResponse({'status': 'success'})
        except Exception as e:
            print(f"Error sending email: {e}")
            return JsonResponse({'status': 'error'}, status=500)
    
    return render(request, 'contact.html')
    


def searchBar(request):
    if request.method == 'POST':
        query = request.POST.get('query')
        print("Query",query)
        try:
            results = Data.objects.get(first_name = query)
        except:
            results = "Data Not Found"
        return render(request,'details.html',{"results":results})