import sys
import numpy as np
import pandas as pd
import tensorflow as tf
import seaborn as sns
import sklearn as sk

from sklearn.model_selection import train_test_split



def model():
    inputs = tf.keras.layers.Input(shape=(3,))
    outputs = tf.keras.layers.Dense(2, activation='softmax', kernel_initializer='glorot_uniform')(inputs)
    model = tf.keras.Model(inputs=inputs, outputs=outputs)
    
    model.compile(optimizer='adam', loss='categorical_crossentropy',
                  metrics=['accuracy'])
    return model


if __name__ == '__main__':
	df = pd.read_csv('hospitaldata.csv')

	print(df.columns)
	label=np.array(df.pop('LABEL'))
	df.pop('SL NO.')
	df.pop('NAME')


	data=np.array(df)


	train_data, test_data, train_label, test_label = train_test_split(
    	data, label, train_size=0.8,shuffle=True)

	train_data = train_data.astype('float32')
	test_data = test_data.astype('float32')
	train_label = tf.one_hot(np.array(train_label).reshape(-1,), depth=2)
	test_label = tf.one_hot(np.array(test_label).reshape(-1,), depth=2)

	print(train_data)
	print(train_label)

	print(test_data)
	print(test_label)


	model = model()
	model.summary()
	model.fit(train_data, train_label, epochs=100,
          validation_data=(test_data, test_label))
	
	output = model.predict(test_data)
	
	model.save("model.h5")

	
