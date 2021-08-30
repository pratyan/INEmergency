from flask import Flask,render_template,request
import tensorflow as tf
import numpy as np
import pandas as pd

app = Flask(__name__)

@app.route('/form',methods=['GET', 'POST'])

def home():
    model = tf.keras.models.load_model('model.h5')

    data = []
    output = " "
    if request.method == 'POST':
        data = pd.read_csv('suggestions.csv')    

        work_data=train_data.astype('float32')
        name = data.pop('NAME')
    
        try:
            model = tf.keras.models.load_model('model.h5')
            res = model.predict(work_data)
            
            out=[]
            for i in range(len(name)):
                out.append([name[i],res[i][0]])
            out.sort(key= lambda k:-k[1])

    print(out)


            
        except ValueError:
            out = "Try Again!!"
    
    return render_template('index.html',output = out)
    
if __name__ == '__main__':
    app.run(debug=0)
