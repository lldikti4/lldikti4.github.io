import json

def main(request):
    return {
        'status': 200,
        'body': json.dumps({'message': 'Hello, this is your data!'}),
        'headers': {
            'Content-Type': 'application/json'
        }
    }
