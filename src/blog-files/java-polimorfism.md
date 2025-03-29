---
title: "Java Polymorphism"
thumbnail: "https://www.dongee.com/tutoriales/content/images/2023/12/image-62.png"
description: "A better understanding of Polymorphism in Java,
explained with a brief exercise."
---

# Context 
Let's say we want to have a Library of items. There could be different
type of items, such as:

- DVD's
- Books
- Magazines

## What does this have to do with **Polymorphism**?

Well, if we have a library of items, let's say we want to display the
type of each item by looping through the items list. Let's create a loop for
that.

Because items have some things in common, we are going to create a superclass and each item will extend this class 

```java


public class LibraryItem {
    private String item;
    private String author;
    private String publicationYear;
    
    public void getItemType(){
        return "Unknown type";
    }

    public void getItemsType(ArrayList<LibraryItem> items) {
       
        for (LibraryItem item : items) {
            item.getItemType();
        }
    }
}

```


Here is why Polymorphism works in this exercise.
If we want to get the type of each item in the items list, we
have to declare items as an Array of LibraryItem.

In the loop, we have to declare the item's reference type
as LibraryItem, because the items list is also of type LibraryItem. 

On each item, we have to override the getItemType and return whatever
type is the item.

When I did this, I asked: Why do we have to declare getItemType in
LibraryItem if we aren't doing anything with it? Like, we should be
able to just declare getItemType individually in each class, right?
Well, it wouldn't work if we wanted to loop through the **items**
array.

Why? Because Java, at compile time, checks the item's reference type,
not the actual object, remember that in OO java, an object is the
class's instantiation. Like this:

```java
 LibraryItem item = new LibraryItem() 
 
```

In this code, LibraryItem is the reference type, item is a reference to the actual object, not the actual object but a pointer to the object in the heap, but let's not get into that. Let's just say that `item` is the actual object.

So, when we do the loop in the getItemsType(), if we didn't declared
getItemType() in LibraryItem and just declared them in each item
individually, we would get a compiler error, because the item's type
is LibraryItem, not Book() or DVD() or Magazine(), remember, we are
doing this:

```java

public class LibraryItem {
    private String item;
    private String author;
    private String publicationYear;
    
    public String getItemType(){
        return "Unknown type";
    }

    public void getItemsType(ArrayList<LibraryItem> items) {
       
       /*
        Here, item is declared as LibraryItem, so, if we try to
        just access item.getItemType, we would get a compilererror
        because we aren't declaring getItemType method in
        LibraryItem!
       */
       
        for (LibraryItem item : items) {
            item.getItemType();
        }
    }
}

```
Of course, to make this "polymorphic behavior" possible, we have to override the getItemType on each LibraryItem
subclass to return the actual item's type.

```java
// Book.java
public class Book extends LibraryItem {
    @Override 
    public String getItemDisplay() {
       return "Book"; 
    }
}

```

We would have to do this with each item, or else we would get "Unknown
type".

So, you get it? Polymorphism is useful for handling dynamic
functionality!

