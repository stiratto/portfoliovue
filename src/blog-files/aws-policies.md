---
title: "The mental model that helped me understand AWS IAM policies"
thumbnail: "https://miro.medium.com/0*xwQoRQNR1alAlLRW"
description: "You don't understand AWS IAM policies? Are you making
all of your resources public? This is for you."
---


> An entity can be a IAM user, role or service.

IAM Policies let you define what actions does an entity can perform on
a resource.
There's two types of policies: Identity-based policies and
resource-based policies.

Before going into detail, the main thing that helped me to understand
the difference between them is that with identity-based policies you
can't define the actions that another entity on another AWS account
can perform on your own resource.

### Identity-based policies
Identity-based policies apply to a specific entity. This type of
policy defines what actions **THAT** entity can perform. IMPORTANT:
This type of policies only apply to my OWN IAM users, like, you can't
define the actions that another IAM user (let's say your friend Pedro
that lives in Canarias that has another AWS account) can perform.

This policy can't have the field `Principal` in the JSON, because you
link directly an entity to this policy when you're creating the
entity.

### Resource-based policies

Resource-based policies apply to a specific AWS resource. With this type of
policy, you can define who (regardless of the AWS account IAM user) can perform certain actions on this resource. 


