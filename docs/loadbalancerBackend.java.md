# `loadbalancerBackend` Submodule <a name="`loadbalancerBackend` Submodule" id="@cdktf/provider-upcloud.loadbalancerBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerBackend <a name="LoadbalancerBackend" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend upcloud_loadbalancer_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_backend.LoadbalancerBackend;

LoadbalancerBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .loadbalancer(java.lang.String)
    .name(java.lang.String)
//  .properties(IResolvable|java.util.List<LoadbalancerBackendProperties>)
//  .resolverName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.loadbalancer">loadbalancer</a></code> | <code>java.lang.String</code> | UUID of the load balancer to which the backend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the backend. Must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.properties">properties</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.resolverName">resolverName</a></code> | <code>java.lang.String</code> | Domain name resolver used with dynamic type members. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.loadbalancer"></a>

- *Type:* java.lang.String

UUID of the load balancer to which the backend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#loadbalancer LoadbalancerBackend#loadbalancer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the backend. Must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#name LoadbalancerBackend#name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.properties"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#properties LoadbalancerBackend#properties}

---

##### `resolverName`<sup>Optional</sup> <a name="resolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.resolverName"></a>

- *Type:* java.lang.String

Domain name resolver used with dynamic type members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#resolver_name LoadbalancerBackend#resolver_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetResolverName">resetResolverName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties"></a>

```java
public void putProperties(IResolvable|java.util.List<LoadbalancerBackendProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>>

---

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetResolverName` <a name="resetResolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetResolverName"></a>

```java
public void resetResolverName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_backend.LoadbalancerBackend;

LoadbalancerBackend.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_backend.LoadbalancerBackend;

LoadbalancerBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_backend.LoadbalancerBackend;

LoadbalancerBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_backend.LoadbalancerBackend;

LoadbalancerBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadbalancerBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoadbalancerBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadbalancerBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadbalancerBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList">LoadbalancerBackendPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tlsConfigs">tlsConfigs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancerInput">loadbalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.propertiesInput">propertiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverNameInput">resolverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancer">loadbalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverName">resolverName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.properties"></a>

```java
public LoadbalancerBackendPropertiesList getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList">LoadbalancerBackendPropertiesList</a>

---

##### `tlsConfigs`<sup>Required</sup> <a name="tlsConfigs" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tlsConfigs"></a>

```java
public java.util.List<java.lang.String> getTlsConfigs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadbalancerInput`<sup>Optional</sup> <a name="loadbalancerInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancerInput"></a>

```java
public java.lang.String getLoadbalancerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.propertiesInput"></a>

```java
public IResolvable|java.util.List<LoadbalancerBackendProperties> getPropertiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>>

---

##### `resolverNameInput`<sup>Optional</sup> <a name="resolverNameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverNameInput"></a>

```java
public java.lang.String getResolverNameInput();
```

- *Type:* java.lang.String

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancer"></a>

```java
public java.lang.String getLoadbalancer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resolverName`<sup>Required</sup> <a name="resolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverName"></a>

```java
public java.lang.String getResolverName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerBackendConfig <a name="LoadbalancerBackendConfig" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_backend.LoadbalancerBackendConfig;

LoadbalancerBackendConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .loadbalancer(java.lang.String)
    .name(java.lang.String)
//  .properties(IResolvable|java.util.List<LoadbalancerBackendProperties>)
//  .resolverName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.loadbalancer">loadbalancer</a></code> | <code>java.lang.String</code> | UUID of the load balancer to which the backend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the backend. Must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.properties">properties</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.resolverName">resolverName</a></code> | <code>java.lang.String</code> | Domain name resolver used with dynamic type members. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.loadbalancer"></a>

```java
public java.lang.String getLoadbalancer();
```

- *Type:* java.lang.String

UUID of the load balancer to which the backend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#loadbalancer LoadbalancerBackend#loadbalancer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the backend. Must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#name LoadbalancerBackend#name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.properties"></a>

```java
public IResolvable|java.util.List<LoadbalancerBackendProperties> getProperties();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#properties LoadbalancerBackend#properties}

---

##### `resolverName`<sup>Optional</sup> <a name="resolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.resolverName"></a>

```java
public java.lang.String getResolverName();
```

- *Type:* java.lang.String

Domain name resolver used with dynamic type members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#resolver_name LoadbalancerBackend#resolver_name}

---

### LoadbalancerBackendProperties <a name="LoadbalancerBackendProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_backend.LoadbalancerBackendProperties;

LoadbalancerBackendProperties.builder()
//  .healthCheckExpectedStatus(java.lang.Number)
//  .healthCheckFall(java.lang.Number)
//  .healthCheckInterval(java.lang.Number)
//  .healthCheckRise(java.lang.Number)
//  .healthCheckTlsVerify(java.lang.Boolean|IResolvable)
//  .healthCheckType(java.lang.String)
//  .healthCheckUrl(java.lang.String)
//  .http2Enabled(java.lang.Boolean|IResolvable)
//  .outboundProxyProtocol(java.lang.String)
//  .stickySessionCookieName(java.lang.String)
//  .timeoutServer(java.lang.Number)
//  .timeoutTunnel(java.lang.Number)
//  .tlsEnabled(java.lang.Boolean|IResolvable)
//  .tlsUseSystemCa(java.lang.Boolean|IResolvable)
//  .tlsVerify(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckExpectedStatus">healthCheckExpectedStatus</a></code> | <code>java.lang.Number</code> | Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for `tcp` `health_check_type`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckFall">healthCheckFall</a></code> | <code>java.lang.Number</code> | Sets how many failed health checks are allowed until the backend member is taken off from the rotation. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckInterval">healthCheckInterval</a></code> | <code>java.lang.Number</code> | Interval between health checks in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckRise">healthCheckRise</a></code> | <code>java.lang.Number</code> | Sets how many successful health checks are required to put the backend member back into rotation. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckTlsVerify">healthCheckTlsVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enables certificate verification with the system CA certificate bundle. Works with https scheme in health_check_url, otherwise ignored. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | Health check type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckUrl">healthCheckUrl</a></code> | <code>java.lang.String</code> | Target path for health check HTTP GET requests. Ignored for `tcp` `health_check_type`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow HTTP/2 connections to backend members by utilizing ALPN extension of TLS protocol, therefore it can only be enabled when tls_enabled is set to true. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.outboundProxyProtocol">outboundProxyProtocol</a></code> | <code>java.lang.String</code> | Enable outbound proxy protocol by setting the desired version. Defaults to empty string. Empty string disables proxy protocol. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.stickySessionCookieName">stickySessionCookieName</a></code> | <code>java.lang.String</code> | Sets sticky session cookie name. Empty string disables sticky session. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutServer">timeoutServer</a></code> | <code>java.lang.Number</code> | Backend server timeout in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutTunnel">timeoutTunnel</a></code> | <code>java.lang.Number</code> | Maximum inactivity time on the client and server side for tunnels in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enables TLS connection from the load balancer to backend servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsUseSystemCa">tlsUseSystemCa</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If enabled, then the system CA certificate bundle will be used for the certificate verification. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsVerify">tlsVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enables backend servers certificate verification. |

---

##### `healthCheckExpectedStatus`<sup>Optional</sup> <a name="healthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckExpectedStatus"></a>

```java
public java.lang.Number getHealthCheckExpectedStatus();
```

- *Type:* java.lang.Number

Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for `tcp` `health_check_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#health_check_expected_status LoadbalancerBackend#health_check_expected_status}

---

##### `healthCheckFall`<sup>Optional</sup> <a name="healthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckFall"></a>

```java
public java.lang.Number getHealthCheckFall();
```

- *Type:* java.lang.Number

Sets how many failed health checks are allowed until the backend member is taken off from the rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#health_check_fall LoadbalancerBackend#health_check_fall}

---

##### `healthCheckInterval`<sup>Optional</sup> <a name="healthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckInterval"></a>

```java
public java.lang.Number getHealthCheckInterval();
```

- *Type:* java.lang.Number

Interval between health checks in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#health_check_interval LoadbalancerBackend#health_check_interval}

---

##### `healthCheckRise`<sup>Optional</sup> <a name="healthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckRise"></a>

```java
public java.lang.Number getHealthCheckRise();
```

- *Type:* java.lang.Number

Sets how many successful health checks are required to put the backend member back into rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#health_check_rise LoadbalancerBackend#health_check_rise}

---

##### `healthCheckTlsVerify`<sup>Optional</sup> <a name="healthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckTlsVerify"></a>

```java
public java.lang.Boolean|IResolvable getHealthCheckTlsVerify();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enables certificate verification with the system CA certificate bundle. Works with https scheme in health_check_url, otherwise ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#health_check_tls_verify LoadbalancerBackend#health_check_tls_verify}

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

Health check type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#health_check_type LoadbalancerBackend#health_check_type}

---

##### `healthCheckUrl`<sup>Optional</sup> <a name="healthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckUrl"></a>

```java
public java.lang.String getHealthCheckUrl();
```

- *Type:* java.lang.String

Target path for health check HTTP GET requests. Ignored for `tcp` `health_check_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#health_check_url LoadbalancerBackend#health_check_url}

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.http2Enabled"></a>

```java
public java.lang.Boolean|IResolvable getHttp2Enabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow HTTP/2 connections to backend members by utilizing ALPN extension of TLS protocol, therefore it can only be enabled when tls_enabled is set to true.

Note: members should support HTTP/2 for this setting to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#http2_enabled LoadbalancerBackend#http2_enabled}

---

##### `outboundProxyProtocol`<sup>Optional</sup> <a name="outboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.outboundProxyProtocol"></a>

```java
public java.lang.String getOutboundProxyProtocol();
```

- *Type:* java.lang.String

Enable outbound proxy protocol by setting the desired version. Defaults to empty string. Empty string disables proxy protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#outbound_proxy_protocol LoadbalancerBackend#outbound_proxy_protocol}

---

##### `stickySessionCookieName`<sup>Optional</sup> <a name="stickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.stickySessionCookieName"></a>

```java
public java.lang.String getStickySessionCookieName();
```

- *Type:* java.lang.String

Sets sticky session cookie name. Empty string disables sticky session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#sticky_session_cookie_name LoadbalancerBackend#sticky_session_cookie_name}

---

##### `timeoutServer`<sup>Optional</sup> <a name="timeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutServer"></a>

```java
public java.lang.Number getTimeoutServer();
```

- *Type:* java.lang.Number

Backend server timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#timeout_server LoadbalancerBackend#timeout_server}

---

##### `timeoutTunnel`<sup>Optional</sup> <a name="timeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutTunnel"></a>

```java
public java.lang.Number getTimeoutTunnel();
```

- *Type:* java.lang.Number

Maximum inactivity time on the client and server side for tunnels in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#timeout_tunnel LoadbalancerBackend#timeout_tunnel}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTlsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enables TLS connection from the load balancer to backend servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#tls_enabled LoadbalancerBackend#tls_enabled}

---

##### `tlsUseSystemCa`<sup>Optional</sup> <a name="tlsUseSystemCa" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsUseSystemCa"></a>

```java
public java.lang.Boolean|IResolvable getTlsUseSystemCa();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If enabled, then the system CA certificate bundle will be used for the certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#tls_use_system_ca LoadbalancerBackend#tls_use_system_ca}

---

##### `tlsVerify`<sup>Optional</sup> <a name="tlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsVerify"></a>

```java
public java.lang.Boolean|IResolvable getTlsVerify();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enables backend servers certificate verification.

Please make sure that TLS config with the certificate bundle of type authority attached to the backend or `tls_use_system_ca` enabled. Note: `tls_verify` has preference over `health_check_tls_verify` when `tls_enabled` in true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_backend#tls_verify LoadbalancerBackend#tls_verify}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerBackendPropertiesList <a name="LoadbalancerBackendPropertiesList" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_backend.LoadbalancerBackendPropertiesList;

new LoadbalancerBackendPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.get"></a>

```java
public LoadbalancerBackendPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LoadbalancerBackendProperties> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>>

---


### LoadbalancerBackendPropertiesOutputReference <a name="LoadbalancerBackendPropertiesOutputReference" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_backend.LoadbalancerBackendPropertiesOutputReference;

new LoadbalancerBackendPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckExpectedStatus">resetHealthCheckExpectedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckFall">resetHealthCheckFall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckInterval">resetHealthCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckRise">resetHealthCheckRise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckTlsVerify">resetHealthCheckTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckType">resetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckUrl">resetHealthCheckUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetOutboundProxyProtocol">resetOutboundProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetStickySessionCookieName">resetStickySessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutServer">resetTimeoutServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutTunnel">resetTimeoutTunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsUseSystemCa">resetTlsUseSystemCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsVerify">resetTlsVerify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthCheckExpectedStatus` <a name="resetHealthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckExpectedStatus"></a>

```java
public void resetHealthCheckExpectedStatus()
```

##### `resetHealthCheckFall` <a name="resetHealthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckFall"></a>

```java
public void resetHealthCheckFall()
```

##### `resetHealthCheckInterval` <a name="resetHealthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckInterval"></a>

```java
public void resetHealthCheckInterval()
```

##### `resetHealthCheckRise` <a name="resetHealthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckRise"></a>

```java
public void resetHealthCheckRise()
```

##### `resetHealthCheckTlsVerify` <a name="resetHealthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckTlsVerify"></a>

```java
public void resetHealthCheckTlsVerify()
```

##### `resetHealthCheckType` <a name="resetHealthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckType"></a>

```java
public void resetHealthCheckType()
```

##### `resetHealthCheckUrl` <a name="resetHealthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckUrl"></a>

```java
public void resetHealthCheckUrl()
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHttp2Enabled"></a>

```java
public void resetHttp2Enabled()
```

##### `resetOutboundProxyProtocol` <a name="resetOutboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetOutboundProxyProtocol"></a>

```java
public void resetOutboundProxyProtocol()
```

##### `resetStickySessionCookieName` <a name="resetStickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetStickySessionCookieName"></a>

```java
public void resetStickySessionCookieName()
```

##### `resetTimeoutServer` <a name="resetTimeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutServer"></a>

```java
public void resetTimeoutServer()
```

##### `resetTimeoutTunnel` <a name="resetTimeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutTunnel"></a>

```java
public void resetTimeoutTunnel()
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsEnabled"></a>

```java
public void resetTlsEnabled()
```

##### `resetTlsUseSystemCa` <a name="resetTlsUseSystemCa" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsUseSystemCa"></a>

```java
public void resetTlsUseSystemCa()
```

##### `resetTlsVerify` <a name="resetTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsVerify"></a>

```java
public void resetTlsVerify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatusInput">healthCheckExpectedStatusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFallInput">healthCheckFallInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckIntervalInput">healthCheckIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRiseInput">healthCheckRiseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerifyInput">healthCheckTlsVerifyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrlInput">healthCheckUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocolInput">outboundProxyProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieNameInput">stickySessionCookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServerInput">timeoutServerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnelInput">timeoutTunnelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCaInput">tlsUseSystemCaInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerifyInput">tlsVerifyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatus">healthCheckExpectedStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFall">healthCheckFall</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckInterval">healthCheckInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRise">healthCheckRise</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerify">healthCheckTlsVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrl">healthCheckUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocol">outboundProxyProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieName">stickySessionCookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServer">timeoutServer</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnel">timeoutTunnel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCa">tlsUseSystemCa</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerify">tlsVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthCheckExpectedStatusInput`<sup>Optional</sup> <a name="healthCheckExpectedStatusInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatusInput"></a>

```java
public java.lang.Number getHealthCheckExpectedStatusInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckFallInput`<sup>Optional</sup> <a name="healthCheckFallInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFallInput"></a>

```java
public java.lang.Number getHealthCheckFallInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckIntervalInput`<sup>Optional</sup> <a name="healthCheckIntervalInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckIntervalInput"></a>

```java
public java.lang.Number getHealthCheckIntervalInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckRiseInput`<sup>Optional</sup> <a name="healthCheckRiseInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRiseInput"></a>

```java
public java.lang.Number getHealthCheckRiseInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckTlsVerifyInput`<sup>Optional</sup> <a name="healthCheckTlsVerifyInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerifyInput"></a>

```java
public java.lang.Boolean|IResolvable getHealthCheckTlsVerifyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTypeInput"></a>

```java
public java.lang.String getHealthCheckTypeInput();
```

- *Type:* java.lang.String

---

##### `healthCheckUrlInput`<sup>Optional</sup> <a name="healthCheckUrlInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrlInput"></a>

```java
public java.lang.String getHealthCheckUrlInput();
```

- *Type:* java.lang.String

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2EnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getHttp2EnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `outboundProxyProtocolInput`<sup>Optional</sup> <a name="outboundProxyProtocolInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocolInput"></a>

```java
public java.lang.String getOutboundProxyProtocolInput();
```

- *Type:* java.lang.String

---

##### `stickySessionCookieNameInput`<sup>Optional</sup> <a name="stickySessionCookieNameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieNameInput"></a>

```java
public java.lang.String getStickySessionCookieNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutServerInput`<sup>Optional</sup> <a name="timeoutServerInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServerInput"></a>

```java
public java.lang.Number getTimeoutServerInput();
```

- *Type:* java.lang.Number

---

##### `timeoutTunnelInput`<sup>Optional</sup> <a name="timeoutTunnelInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnelInput"></a>

```java
public java.lang.Number getTimeoutTunnelInput();
```

- *Type:* java.lang.Number

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTlsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tlsUseSystemCaInput`<sup>Optional</sup> <a name="tlsUseSystemCaInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCaInput"></a>

```java
public java.lang.Boolean|IResolvable getTlsUseSystemCaInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tlsVerifyInput`<sup>Optional</sup> <a name="tlsVerifyInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerifyInput"></a>

```java
public java.lang.Boolean|IResolvable getTlsVerifyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `healthCheckExpectedStatus`<sup>Required</sup> <a name="healthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatus"></a>

```java
public java.lang.Number getHealthCheckExpectedStatus();
```

- *Type:* java.lang.Number

---

##### `healthCheckFall`<sup>Required</sup> <a name="healthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFall"></a>

```java
public java.lang.Number getHealthCheckFall();
```

- *Type:* java.lang.Number

---

##### `healthCheckInterval`<sup>Required</sup> <a name="healthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckInterval"></a>

```java
public java.lang.Number getHealthCheckInterval();
```

- *Type:* java.lang.Number

---

##### `healthCheckRise`<sup>Required</sup> <a name="healthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRise"></a>

```java
public java.lang.Number getHealthCheckRise();
```

- *Type:* java.lang.Number

---

##### `healthCheckTlsVerify`<sup>Required</sup> <a name="healthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerify"></a>

```java
public java.lang.Boolean|IResolvable getHealthCheckTlsVerify();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

---

##### `healthCheckUrl`<sup>Required</sup> <a name="healthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrl"></a>

```java
public java.lang.String getHealthCheckUrl();
```

- *Type:* java.lang.String

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2Enabled"></a>

```java
public java.lang.Boolean|IResolvable getHttp2Enabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `outboundProxyProtocol`<sup>Required</sup> <a name="outboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocol"></a>

```java
public java.lang.String getOutboundProxyProtocol();
```

- *Type:* java.lang.String

---

##### `stickySessionCookieName`<sup>Required</sup> <a name="stickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieName"></a>

```java
public java.lang.String getStickySessionCookieName();
```

- *Type:* java.lang.String

---

##### `timeoutServer`<sup>Required</sup> <a name="timeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServer"></a>

```java
public java.lang.Number getTimeoutServer();
```

- *Type:* java.lang.Number

---

##### `timeoutTunnel`<sup>Required</sup> <a name="timeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnel"></a>

```java
public java.lang.Number getTimeoutTunnel();
```

- *Type:* java.lang.Number

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTlsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tlsUseSystemCa`<sup>Required</sup> <a name="tlsUseSystemCa" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCa"></a>

```java
public java.lang.Boolean|IResolvable getTlsUseSystemCa();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tlsVerify`<sup>Required</sup> <a name="tlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerify"></a>

```java
public java.lang.Boolean|IResolvable getTlsVerify();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|LoadbalancerBackendProperties getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

---



